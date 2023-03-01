import { createStore } from "vuex";

export default createStore({
  state: {
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
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
});
