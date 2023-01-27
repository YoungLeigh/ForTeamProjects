<template>
  <router-view></router-view>
</template>

<script>
import Main from "./views/Main.vue";
export default {
  name: "App",
  components: {
    Main,
  },
};
</script>
<style>
body {
  margin: 0;
}
</style>
