import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import SignUp from "../components/SignUp.vue";
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
