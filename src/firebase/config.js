import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrwRK4BgOz31LC73Wr3tpYAtaRAnYzy-o",
  authDomain: "forteamprojects.firebaseapp.com",
  projectId: "forteamprojects",
  storageBucket: "forteamprojects.appspot.com",
  messagingSenderId: "831406928991",
  appId: "1:831406928991:web:6908e8d3158df945fd17ea",
  measurementId: "G-3SQKS0007B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };
