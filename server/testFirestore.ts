import { uploadDatabaseToFirestore, downloadDatabaseFromFirestore } from './firestoreSync';

async function testFirestore() {
  console.log('Testing Firestore connection...');
  try {
    const dummyState = { testKey: { hello: "world" } };
    await uploadDatabaseToFirestore(dummyState);
    console.log('Upload successful.');

    const result = await downloadDatabaseFromFirestore();
    console.log('Download result:', result);
    process.exit(0);
  } catch (err) {
    console.error('Test failed:', err);
    process.exit(1);
  }
}

testFirestore();
