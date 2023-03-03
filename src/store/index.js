import { createStore } from "vuex";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";

const store = createStore({
  state: {
    user: null,
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
  },
});

export default store;
