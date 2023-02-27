<template>
  <div class="login">
    <div class="login-header">
      <h1>ForTeamProjects</h1>
    </div>
    <div class="form-container">
      <p class="login-subheader">Sign In</p>
      <form @submit.prevent="handleSubmit" class="login-form">
        <p class="input-sub">EMAIL</p>
        <input
          class="login-input"
          type="email"
          required
          placeholder="example@gmail.com"
          v-model="email"
        />
        <p class="input-sub">PASSWORD</p>
        <input
          class="login-input"
          type="password"
          required
          v-model="password"
        />
        <button class="login-btn">Login with Email</button>
      </form>
      <p style="color: #959595; font-size: 20px; margin-bottom: 7px">or</p>
      <button class="login-btn-google">
        <img class="google-icon" src="@/assets/images/google.png" />Login with
        Google
      </button>
      <Router-Link class="resetpw-btn" to="/reset-password"
        >Forgot Password?</Router-Link
      >
    </div>
    <div class="signup-btns" style="display: flex; flex-direction: row">
      <p style="margin: 10px 0 0 0; color: #424954">Haven't sign up yet?</p>
      <Router-Link class="signup-btn" to="/signup">Sign Up Now</Router-Link>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "login",
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>
<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #e8f3e1;
  font-family: mainFont;
}
.login-header {
  margin-top: 50px;
  font-family: titleFont;
  font-size: 35px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-bottom: 20px;
}
.login-subheader {
  margin-top: 20px;
  font-size: 25px;
  font-family: mainFont;
  margin-bottom: 0;
}
.login-form {
  display: flex;
  flex-direction: column;
  margin: 15px 30px 15px 30px;
  margin-bottom: 5px;
}
.login-input {
  padding-left: 5px;
  width: 340px;
  height: 50px;
  margin-bottom: 25px;
  border-radius: 5px;
  background-color: #ebebeb;
  border-style: none;
  color: #818181;
  font-family: mainFont, korFont;
  font-size: 20px;
}
.login-input::placeholder {
  color: #b9b9b9;
}
.login-btn {
  border-style: none;
  height: 50px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 18px;
  color: #fff;
}
.login-btn-google {
  width: 340px;
  border-style: none;
  height: 50px;
  background-color: transparent;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 18px;
  color: rgb(88, 88, 88);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 30px;
}
.google-icon {
  height: 23px;
  margin-right: 10px;
}
.form-container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
}
.input-sub {
  margin: 0;
  font-size: 15px;
  font-family: mainFont;
  color: #52565c;
}
.resetpw-btn {
  color: #52565c;
  margin-bottom: 30px;
}
.signup-btn {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
