// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAZ3xBvWExzuQLsNFM6OzrEBy1A4OGTb_k",
  authDomain: "jskchat.firebaseapp.com",
  projectId: "jskchat",
  storageBucket: "jskchat.appspot.com",
  messagingSenderId: "1003973034654",
  appId: "1:1003973034654:web:726e0b0e3273fbdcb0f18f",
  measurementId: "G-46X1FQT3MT"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage };
