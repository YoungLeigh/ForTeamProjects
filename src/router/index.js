import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import LogIn from "../components/LogIn.vue";
import ResetPassword from "../components/ResetPassword.vue";
import SignUp from "../components/SignUp.vue";
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/login",
    name: "Login",
    component: LogIn,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
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
