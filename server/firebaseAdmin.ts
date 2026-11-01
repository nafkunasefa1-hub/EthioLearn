import { getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';

// Read config to get correct projectId and databaseId
const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
let config: any = {};
if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

// Initialize Firebase Admin if not already initialized
if (!getApps().length) {
  initializeApp({
    projectId: config.projectId || process.env.GOOGLE_CLOUD_PROJECT,
  });
}

export const db = getFirestore(
  config.firestoreDatabaseId && config.firestoreDatabaseId !== '(default)' 
    ? config.firestoreDatabaseId 
    : undefined
);
