<template>
  <div class="main">
    <div class="main-content">
      <Header></Header>
      <TeamInfo></TeamInfo>
      <MeetingsInfo></MeetingsInfo>
      <ProjectsInfo></ProjectsInfo>
    </div>
  </div>
</template>

<script>
import TeamInfo from "./TeamInfo/TeamInfo.vue";
import Header from "../components/Header.vue";
import { ref, computed, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MeetingsInfo from "./MeetingsInfo.vue/MeetingsInfo.vue";
import ProjectsInfo from "./ProjectsInfo/ProjectsInfo.vue";

export default {
  name: "Main",
  components: {
    TeamInfo,
    Header,
    MeetingsInfo,
    ProjectsInfo,
  },
  setup() {
    const user = ref(null); //To check user state for navigation guard
    const store = useStore();
    const router = useRouter();

    watchEffect(() => {
      user.value = store.state.user;
      if (!user.value) {
        router.push("/login"); //navigation guard that moves the user to the login page
      }
    });
    if (!user.value) {
      router.push("/login"); //navigation guard that moves the user to the login page
    }
    // if the above way of nav guard doesnt work, use the following:

    // router.beforeEach((to, from, next) => {
    //   const requiresAuth = to.matched.some(
    //     (record) => record.meta.requiresAuth
    //   );
    //   const isAuthenticated = store.state.user !== null;
    //   if (requiresAuth && !isAuthenticated) {
    //     // If the user is not authenticated and the route requires authentication,
    //     // redirect to the login page
    //     next("/login");
    //   } else if (to.path === "/signup" || to.path === "/reset-password") {
    //     // If the user is accessing the sign up or reset password page, allow access
    //     next();
    //   } else {
    //     // Otherwise, continue with the navigation
    //     next();
    //   }
    // });

    return {
      user,
    };
  },
};
</script>
<style>
html {
  background-color: #e8f3e1;
}
body {
  margin: 0;
}
@font-face {
  font-family: titleFont;
  src: url("../fonts/amasisbold.otf") format(opentype);
}
@font-face {
  font-family: mainFont;
  src: url("../fonts/arlrdbd.ttf") format(truetype);
  unicode-range: U+0041-005A, U+0061-007A, U+0030-0039 U+0020-002F, U+003A-0040,
    U+005B-0060, U+007B-007E;
}
@font-face {
  font-family: korFont;
  src: url("../fonts/MICEGothic.ttf") format(truetype);
  unicode-range: U+AC00-D7A3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main {
  background-color: #e8f3e1;
}
.main-content {
  background-color: #e8f3e1;
  max-width: 750px;
  height: 100%;
  font-family: mainFont;
  margin: auto;
  margin-bottom: 40px;
}
</style>
