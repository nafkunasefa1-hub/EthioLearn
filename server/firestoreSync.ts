import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDocs, collection } from 'firebase/firestore/lite';
import fs from 'fs';
import path from 'path';

const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
let firebaseConfig: any = {};
if (fs.existsSync(configPath)) {
  const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  firebaseConfig = {
    apiKey: cfg.apiKey,
    authDomain: cfg.authDomain,
    projectId: cfg.projectId,
    storageBucket: cfg.storageBucket,
    messagingSenderId: cfg.messagingSenderId,
    appId: cfg.appId
  };
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.projectId !== 'demo-project' && fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath, 'utf8')).firestoreDatabaseId : undefined);

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'database.json');
const STORAGE_DIR = path.join(process.cwd(), 'storage');

const CHUNK_SIZE = 800 * 1024; // 800KB chunks

function chunkString(str: string, size: number): string[] {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substring(o, o + size);
  }
  return chunks;
}

let firestoreWriteQuotaWarningLogged = false;

export async function uploadDatabaseToFirestore(_state: any) {
  // Disabled database backup writes to Firestore because the full curriculum database
  // exceeds the Spark free tier daily write unit limits (20,000 writes/day).
  // All books, pages, exams, and student records are durably persisted to local disk (data/database.json).
  if (!firestoreWriteQuotaWarningLogged) {
    console.info('[FirestoreSync] Database backup to Firestore is paused to preserve Spark tier write quotas. Local persistent disk storage is active.');
    firestoreWriteQuotaWarningLogged = true;
  }
  return;
}

export async function downloadDatabaseFromFirestore(): Promise<any> {
  try {
    const snapshot = await getDocs(collection(db, 'database_backup'));
    if (snapshot.empty) return null;

    const state: any = {};
    const metaDocs = snapshot.docs.filter((d: any) => !d.id.includes('_chunk_'));
    
    for (const metaDoc of metaDocs) {
      const key = metaDoc.id;
      const meta = metaDoc.data();
      const chunksCount = meta.chunksCount;
      
      let fullStr = '';
      for (let i = 0; i < chunksCount; i++) {
        const chunkDoc = snapshot.docs.find((d: any) => d.id === `${key}_chunk_${i}`);
        if (chunkDoc) {
          fullStr += chunkDoc.data().data;
        }
      }
      
      if (fullStr) {
        state[key] = JSON.parse(fullStr);
      }
    }
    
    return Object.keys(state).length > 0 ? state : null;
  } catch (err: any) {
    if (err?.message?.includes('Quota limit exceeded') || err?.code === 'resource-exhausted') {
      console.warn('[FirestoreSync] Read quota limit reached on Spark tier. Using local disk database.');
    } else {
      console.error('Error downloading database from Firestore:', err);
    }
    return null;
  }
}

export async function uploadFileToFirestore(filePath: string, fileType: 'books' | 'exams', fileId: string) {
  // Disabled file backup to Firestore due to free tier quota limit
  // console.log('File backup disabled to save quota.');
  return;
}

export async function downloadAllFilesFromFirestore() {
  // Disabled file download from Firestore
  return;
}
