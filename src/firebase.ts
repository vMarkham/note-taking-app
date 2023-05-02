// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCydATBbPSxKCYgh3WGp-sgHXSgDgpQvQ8",
    authDomain: "note-taking-app-9d4a1.firebaseapp.com",
    projectId: "note-taking-app-9d4a1",
    storageBucket: "note-taking-app-9d4a1.appspot.com",
    messagingSenderId: "415768320533",
    appId: "1:415768320533:web:4b0243ff317d3a0238cc1c",
    measurementId: "G-W4JESBD000"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const appInstance = app;
