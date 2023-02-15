// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.PET_VIEW_API_KEY,
  authDomain: process.env.PET_VIEW_AUTH_DOMAIN,
  projectId: process.env.PET_VIEW_PROJECT_ID,
  storageBucket: process.env.PET_VIEW_STORAGE_BUCKET,
  messagingSenderId: process.env.PET_VIEW_MESSAGING_SENDER_ID,
  appId: process.env.PET_VIEW_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

