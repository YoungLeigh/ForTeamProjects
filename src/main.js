import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faPenToSquare,
  faTrash,
  faUser,
  faAddressBook,
  faXmark,
  faCheck,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(
  faUserSecret,
  faPenToSquare,
  faTrash,
  faUser,
  faAddressBook,
  faXmark,
  faCheck,
  faCircleUser
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
