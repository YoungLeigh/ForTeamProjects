<template>
  <div class="main">
    <div class="main-content">
      <Header />
      <TeamInfo />
    </div>
  </div>
</template>

<script>
import TeamInfo from "./TeamInfo/TeamInfo.vue";
import Header from "../components/Header.vue";
export default {
  name: "Main",
  components: {
    TeamInfo,
    Header,
  },
};
</script>
<style>
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
