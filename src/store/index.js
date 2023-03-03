import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    teaminfo: [
      {
        id: 1,
        name: "Young Aude Leigh",
        email: "yoonyoung.lee1218@gmail.com",
        contacts: "010-8321-1287",
      },
      {
        id: 2,
        name: "Mark Wajelo",
        email: "wjaleo@gmail.com",
        contacts: "010-1121-1227",
      },
      {
        id: 3,
        name: "Graham",
        email: "GrahamHancock@gmail.com",
        contacts: "010-8021-2222",
      },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
  },
  actions: {
    signup(context, payload) {
      console.log("signup action");
    },
  },
  getters: {},
  modules: {},
});

export default store;
