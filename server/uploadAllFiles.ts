import fs from 'fs';
import path from 'path';
import { uploadFileToFirestore } from './firestoreSync';

async function uploadAllFiles() {
  const booksDir = path.join(process.cwd(), 'storage', 'private', 'books');
  if (fs.existsSync(booksDir)) {
    const files = fs.readdirSync(booksDir);
    for (const f of files) {
      if (f.endsWith('.pdf')) {
        const id = f.replace('.pdf', '');
        console.log('Uploading book', id);
        await uploadFileToFirestore(path.join(booksDir, f), 'books', id);
      }
    }
  }

  const examsDir = path.join(process.cwd(), 'storage', 'private', 'exams');
  if (fs.existsSync(examsDir)) {
    const files = fs.readdirSync(examsDir);
    for (const f of files) {
      if (f.endsWith('.pdf')) {
        const id = f.replace('.pdf', '');
        console.log('Uploading exam', id);
        await uploadFileToFirestore(path.join(examsDir, f), 'exams', id);
      }
    }
  }
}

uploadAllFiles().then(() => {
  console.log('Finished uploading all files');
  process.exit(0);
});
