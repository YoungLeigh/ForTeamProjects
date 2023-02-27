<template>
  <div class="header">
    <a href="#" class="logo">Team Project</a>
    <div class="header-btn-list">
      <button class="btn1 btn--full btn--outline" type="button">
        Settings
      </button>
      <button
        @click="handleLogin"
        class="btn1 btn--full btn--outline"
        type="button"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    function handleLogin() {
      this.router.push("login");
    }
    return { handleLogin };
  },
  render() {
    return h("button", { onClick: this.handleLogin }, "Go to New Route");
  },
};
</script>

<style>
.header {
  background-color: #e8f3e1;
  height: 55px;
  display: flex;
  color: white;
  align-items: center;
  gap: 10px;
  max-width: 750px;
  margin: auto;
  justify-content: space-between;
}
.logo {
  font-family: titleFont;
  font-size: 35px;
  text-decoration: none;
  color: #424954;
  width: 250px;
  white-space: nowrap;
}
.header-btn-list {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.btn1 {
  background-color: #00cc99;
  border: none;
}
.btn1,
.btn:link,
.btn:visited {
  width: 75px;
  height: 35px;
  display: flex;
  text-decoration: none;
  font-size: 15px;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  padding: 11px;
  font-family: mainFont;
  color: white;
}

.btn--full:link,
.btn--full:visited {
  background-color: rgb(255, 255, 255);
  color: black;
  background-color: #00cc99;
  color: #424954;
}
.btn--full:hover,
.btn--full:active {
  background-color: white;
}
.btn--outline:hover,
.btn--outline:active {
  background-color: #deddddc2;
  box-shadow: inset 0 0 0 1.5px #fff;
}
</style>
