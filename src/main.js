import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faUserSecret,
  faPenToSquare,
  faTrash,
  faUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

/* add icons to the library */
library.add(faUserSecret, faPenToSquare, faTrash, faUser, faAddressBook);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
