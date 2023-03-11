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
    teaminfo: {},
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
    saveMember({ commit }, payload) {
      db.ref("teaminfo").set(payload);
      commit("saveNewMember", payload);
    }, //adding new member to the database
    async fetchNewMemberData({ commit }) {
      const snapshot = await db.ref("teaminfo").once("value");
      const data = snapshot.val();
      commit("saveNewMember", data);
    }, //when the data is stored, brings the current data to be rendered to the page
  },
});

const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsubscribe(); //unsubscribe from the change only when we first make the connection
});

export default store;
