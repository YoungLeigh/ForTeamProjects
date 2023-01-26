<template>
  <div class="main">Home</div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      teaminfo: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/teaminfo")
      .then((res) => res.json())
      .then((data) => (this.teaminfo = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
