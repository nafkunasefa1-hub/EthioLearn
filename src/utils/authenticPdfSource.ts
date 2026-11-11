import { getOfflinePdfBlob, savePdfOffline } from './offlineStorage';

const GITHUB_RAW_BOOKS_BASE =
  'https://raw.githubusercontent.com/nafkunasefa1-hub/EthioLearn/main/storage/private/books';

export const GITHUB_RAW_EXAMS_BASE =
  'https://raw.githubusercontent.com/nafkunasefa1-hub/EthioLearn/main/storage/private/exams';

export const GITHUB_RAW_BOOK_PAGES_BASE =
  'https://raw.githubusercontent.com/nafkunasefa1-hub/EthioLearn/main/data/book_pages';

export const GITHUB_RAW_PDFJS_FONTS_URL =
  'https://raw.githubusercontent.com/nafkunasefa1-hub/EthioLearn/main/public/vendor/pdfjs/standard_fonts/';

const STREAM_ALIAS_MAP: Record<string, string> = {
  'book-11-nat-eng': 'book-11-eng',
  'book-11-soc-eng': 'book-11-eng',
  'book-11-nat-math': 'book-11-math',
  'book-11-soc-math': 'book-11-math',
  'book-12-nat-bio': 'book-12-bio',
  'book-12-nat-math': 'book-12-math',
  'book-12-soc-math': 'book-12-math'
};

const SPLIT_BOOKS = new Set([
  'book-11-eng',
  'book-11-math',
  'book-12-bio',
  'book-12-math'
]);

const sessionPdfCache = new Map<string, Blob>();
const inflightDownloads = new Map<string, Promise<Blob>>();

export function getAuthenticBookPdfUrls(bookId: string): string[] {
  const canonical = STREAM_ALIAS_MAP[bookId] || bookId;
  if (SPLIT_BOOKS.has(canonical)) {
    return [
      `${GITHUB_RAW_BOOKS_BASE}/${canonical}.pdf.part1`,
      `${GITHUB_RAW_BOOKS_BASE}/${canonical}.pdf.part2`
    ];
  }
  return [`${GITHUB_RAW_BOOKS_BASE}/${canonical}.pdf`];
}

async function fetchUrlWithProgress(
  url: string,
  onBytes: (delta: number, contentLength: number) => void
): Promise<Uint8Array> {
  // Simple CORS GET (no custom headers) avoids OPTIONS preflight on GitHub Raw CDN
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch textbook stream (${res.status})`);
  }
  const total = parseInt(res.headers.get('content-length') || '0', 10);
  if (!res.body) {
    const ab = await res.arrayBuffer();
    onBytes(ab.byteLength, total || ab.byteLength);
    return new Uint8Array(ab);
  }

  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      chunks.push(value);
      received += value.byteLength;
      onBytes(value.byteLength, total);
    }
  }

  const combined = new Uint8Array(received);
  let offset = 0;
  for (const c of chunks) {
    combined.set(c, offset);
    offset += c.byteLength;
  }
  return combined;
}

export async function loadAuthenticBookPdfBlob(
  bookId: string,
  bookTitle?: string,
  onProgress?: (statusText: string) => void
): Promise<Blob> {
  const canonical = STREAM_ALIAS_MAP[bookId] || bookId;

  // 1. Check fast in-memory session cache
  const mem = sessionPdfCache.get(canonical) || sessionPdfCache.get(bookId);
  if (mem && mem.size > 100000) {
    return mem;
  }

  // 2. Check IndexedDB offline storage (must be >100KB authentic scanned PDF)
  try {
    const idbBlob = (await getOfflinePdfBlob(bookId)) || (canonical !== bookId ? await getOfflinePdfBlob(canonical) : null);
    if (idbBlob && idbBlob.size > 100000) {
      const typedBlob = idbBlob.type === 'application/pdf' ? idbBlob : new Blob([idbBlob], { type: 'application/pdf' });
      sessionPdfCache.set(canonical, typedBlob);
      sessionPdfCache.set(bookId, typedBlob);
      return typedBlob;
    }
  } catch {}

  // 3. Coalesce concurrent downloads for the same textbook
  if (inflightDownloads.has(canonical)) {
    onProgress?.('Streaming official scanned Ministry of Education PDF...');
    return inflightDownloads.get(canonical)!;
  }

  const downloadTask = (async () => {
    const urls = getAuthenticBookPdfUrls(bookId);
    let loadedBytes = 0;
    let knownTotalBytes = 0;
    const seenTotals = new Set<number>();

    const partBuffers: Uint8Array[] = [];
    for (let i = 0; i < urls.length; i++) {
      let recordedTotal = false;
      const partBytes = await fetchUrlWithProgress(urls[i], (delta, partTotal) => {
        if (!recordedTotal && partTotal > 0 && !seenTotals.has(i)) {
          seenTotals.add(i);
          knownTotalBytes += partTotal;
          recordedTotal = true;
        }
        loadedBytes += delta;
        const mbLoaded = (loadedBytes / (1024 * 1024)).toFixed(1);
        if (knownTotalBytes > 0 && urls.length === 1) {
          const pct = Math.min(99, Math.round((loadedBytes / knownTotalBytes) * 100));
          const mbTotal = (knownTotalBytes / (1024 * 1024)).toFixed(1);
          onProgress?.(`Streaming scanned PDF (${pct}% • ${mbLoaded} / ${mbTotal} MB)...`);
        } else if (urls.length > 1) {
          onProgress?.(`Streaming scanned PDF Part ${i + 1}/${urls.length} (${mbLoaded} MB)...`);
        } else {
          onProgress?.(`Streaming scanned PDF (${mbLoaded} MB)...`);
        }
      });
      partBuffers.push(partBytes);
    }

    const totalLen = partBuffers.reduce((acc, b) => acc + b.byteLength, 0);
    let finalBytes: Uint8Array;
    if (partBuffers.length === 1) {
      finalBytes = partBuffers[0];
    } else {
      finalBytes = new Uint8Array(totalLen);
      let off = 0;
      for (const b of partBuffers) {
        finalBytes.set(b, off);
        off += b.byteLength;
      }
    }

    const pdfBlob = new Blob([finalBytes], { type: 'application/pdf' });
    sessionPdfCache.set(canonical, pdfBlob);
    sessionPdfCache.set(bookId, pdfBlob);

    // Persist in IndexedDB in background so subsequent opens are instantaneous (0ms)
    savePdfOffline(bookId, pdfBlob, bookTitle).catch(() => {});
    if (canonical !== bookId) {
      savePdfOffline(canonical, pdfBlob, bookTitle).catch(() => {});
    }

    return pdfBlob;
  })();

  inflightDownloads.set(canonical, downloadTask);
  try {
    return await downloadTask;
  } finally {
    inflightDownloads.delete(canonical);
  }
}
