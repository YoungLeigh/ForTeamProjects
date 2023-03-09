import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
  sendPasswordResetEmail,
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
    addMember(state, object) {
      state.teaminfo.push(object);
    },
  },
  actions: {
    async signUp(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
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
    },
    async deleteProfile() {
      const user = auth.currentUser;
      await deleteUser(user);
      console.log("user deleted");
    },
    async resetPassword(context, email) {
      await sendPasswordResetEmail(auth, email);
      console.log("reset-email sent successfully");
    },
    addMember({ commit }, object) {
      commit("addMember", object);
    },
  },
});

const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsubscribe(); //unsubscribe from the change only when we first make the connection
});

export default store;
