import { createStore } from "vuex";
import { db } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { auth } from "../firebase/config.js";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    teaminfo: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    setError(state, error) {
      state.error = error;
    },
    setAuthIsReady(state, paylaod) {
      state.authIsReady = paylaod;
    },
    saveNewMember(state, payload) {
      state.teaminfo = payload;
    },
  },

  actions: {
    async signUp(context, { email, password }) {
      //signing up with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete Sign Up");
      }
    },
    async signUpWithGoogle(context) {
      //signing up with google
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(getAuth(), provider);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete Sign Up");
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete Login");
      }
    },
    async logout(context) {
      console.log("logout action");
      await signOut(auth);
      context.commit("setUser", null);
    }, //log out action
    async deleteProfile() {
      const user = auth.currentUser;
      await deleteUser(user);
      console.log("user deleted");
    }, //deleting account
    async resetPassword(context, email) {
      await sendPasswordResetEmail(auth, email);
      console.log("reset-email sent successfully");
    }, //resetting password
    async saveMember(context, payload) {
      await db.ref("teaminfo").push(payload);
      context.dispatch("fetchNewMemberData");
      // commit("saveNewMember", payload);
    }, //adding new member to the database
  },
});
const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsubscribe(); //unsubscribe from the change only when we first make the connection
});

export default store;
