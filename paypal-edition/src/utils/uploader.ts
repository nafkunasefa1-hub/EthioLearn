/**
 * Resilient File Uploader for EthioLearn
 * - Safely parses server responses (handles HTML error pages like 413 without JSON SyntaxErrors)
 * - Supports automatic slicing and chunked upload for large textbooks (e.g. 78MB+)
 * - Bypasses standard reverse-proxy (Nginx / Cloud Run) body size limits
 */

export async function safeParseResponse(res: Response): Promise<any> {
  const text = await res.text();

  // If response was redirected to cookie check or returned cookie verification html
  if (text.includes('Cookie check') || text.includes('cookie_check') || res.url.includes('cookie_check')) {
    throw new Error('Authentication cookie check in progress. Retrying upload...');
  }

  // If response is HTML (e.g. Nginx 413, 502, 504 error page)
  if (text.trim().startsWith('<') || text.includes('<html')) {
    if (res.status === 413) {
      throw new Error('The uploaded file exceeds proxy size limits (HTTP 413). Using chunked streaming...');
    }
    const titleMatch = text.match(/<title[^>]*>([^<]+)<\/title>/i);
    const h1Match = text.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    const extracted = titleMatch?.[1] || h1Match?.[1] || `Server status ${res.status}`;
    throw new Error(`Upload server error (${res.status}): ${extracted.trim()}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    if (!res.ok) {
      throw new Error(text || `Server returned error status (${res.status})`);
    }
    return { message: text };
  }
}

export interface UploadProgressCallback {
  (percent: number, statusText: string): void;
}

export async function uploadLargeBookPdf({
  file,
  chunkUrl,
  directUrl,
  extraFields = {},
  userId = 'usr-student-premium',
  onProgress
}: {
  file: File;
  chunkUrl: string;
  directUrl: string;
  extraFields?: Record<string, string>;
  userId?: string;
  onProgress?: UploadProgressCallback;
}): Promise<any> {
  const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB per slice (strictly well below standard 32MB proxy limits)
  const isLarge = file.size > 15 * 1024 * 1024; // > 15MB

  // For large files (such as 78MB Grade 9 textbooks), use chunked upload directly
  if (isLarge) {
    return await executeChunkedUpload({
      file,
      url: chunkUrl,
      chunkSize: CHUNK_SIZE,
      extraFields,
      userId,
      onProgress
    });
  }

  // For smaller files, try direct upload with chunked fallback
  try {
    onProgress?.(20, `Uploading ${file.name} directly...`);
    const formData = new FormData();
    formData.append('book_pdf', file);
    Object.entries(extraFields).forEach(([k, v]) => {
      if (v) formData.append(k, v);
    });

    const res = await fetch(directUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'x-user-id': userId
      },
      body: formData
    });

    const data = await safeParseResponse(res);
    if (!res.ok) {
      throw new Error(data.error || 'Failed to upload textbook directly');
    }
    onProgress?.(100, 'Processing complete!');
    return data;
  } catch (err: any) {
    console.warn('Direct upload failed or hit proxy limits, switching to chunked upload:', err);
    return await executeChunkedUpload({
      file,
      url: chunkUrl,
      chunkSize: CHUNK_SIZE,
      extraFields,
      userId,
      onProgress
    });
  }
}

async function executeChunkedUpload({
  file,
  url,
  chunkSize,
  extraFields,
  userId,
  onProgress
}: {
  file: File;
  url: string;
  chunkSize: number;
  extraFields: Record<string, string>;
  userId: string;
  onProgress?: UploadProgressCallback;
}): Promise<any> {
  const totalChunks = Math.ceil(file.size / chunkSize);
  const uploadId = `up-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const mbTotal = (file.size / (1024 * 1024)).toFixed(1);

  onProgress?.(5, `Starting chunked upload for ${file.name} (${mbTotal} MB across ${totalChunks} chunks)...`);

  let finalData: any = null;

  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(file.size, start + chunkSize);
    const chunkBlob = file.slice(start, end);

    const formData = new FormData();
    formData.append('chunk', chunkBlob, file.name);
    formData.append('uploadId', uploadId);
    formData.append('chunkIndex', String(i));
    formData.append('totalChunks', String(totalChunks));
    formData.append('fileName', file.name);
    formData.append('fileSize', String(file.size));

    // Append metadata to every chunk (or final chunk)
    Object.entries(extraFields).forEach(([k, v]) => {
      if (v) formData.append(k, v);
    });

    const chunkMb = (chunkBlob.size / (1024 * 1024)).toFixed(1);
    const percent = Math.min(92, Math.round(((i + 1) / totalChunks) * 90));
    onProgress?.(
      percent,
      `Uploading chunk ${i + 1} of ${totalChunks} (${chunkMb} MB) • ${percent}% complete...`
    );

    let res: Response | null = null;
    let data: any = null;
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      attempts++;
      try {
        res = await fetch(url, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'x-user-id': userId
          },
          body: formData
        });

        data = await safeParseResponse(res);
        if (res.ok) {
          break;
        } else {
          if (attempts >= maxAttempts) {
            throw new Error(data?.error || `Upload failed at chunk ${i + 1} of ${totalChunks}`);
          }
          await new Promise(r => setTimeout(r, 1000 * attempts));
        }
      } catch (chunkErr: any) {
        if (attempts >= maxAttempts) {
          throw new Error(`Network error uploading chunk ${i + 1} of ${totalChunks}: ${chunkErr.message}`);
        }
        await new Promise(r => setTimeout(r, 1000 * attempts));
      }
    }

    finalData = data;
  }

  onProgress?.(96, 'All chunks uploaded! Reassembling textbook & extracting pages...');
  return finalData;
}
