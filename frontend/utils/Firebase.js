import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-9dfd9.firebaseapp.com",
  projectId: "loginonecart-9dfd9",
  storageBucket: "loginonecart-9dfd9.firebasestorage.app",
  messagingSenderId: "34655395715",
  appId: "1:34655395715:web:60a87db80d1ad6cc54e0b6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export {auth, provider}