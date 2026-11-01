import { getApps, initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

if (!getApps().length) {
  initializeApp();
}

async function testStorage() {
  try {
    const bucket = getStorage().bucket('hypnotic-altar-llxdt.firebasestorage.app');
    await bucket.file('test.txt').save('hello world');
    console.log('Firebase Storage works!');
  } catch (err) {
    console.error('Firebase Storage failed:', err);
  }
}

testStorage();
