import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
