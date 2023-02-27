<template>
  <div class="signup">
    <div class="signup-header">
      <h1>ForTeamProjects</h1>
    </div>
    <div class="form-container">
      <p class="signup-subheader">Sign Up</p>
      <form @submit.prevent="handleSubmit" class="signup-form">
        <p class="input-sub">EMAIL</p>
        <input
          class="signup-input"
          type="email"
          required
          placeholder="example@gmail.com"
          v-model="email"
        />
        <p class="input-sub">PASSWORD</p>
        <input
          class="signup-input"
          type="password"
          required
          v-model="password"
        />
        <button class="signup-btn">Login with Email</button>
      </form>
      <p style="color: #b9b9b9; font-size: 20px">or</p>
      <button class="signup-btn-google">
        <img class="google-icon" src="@/assets/images/google.png" />Login with
        Google
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "SignUp",
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
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #e8f3e1;
  font-family: mainFont;
}
.signup-header {
  margin-top: 50px;
  font-family: titleFont;
  font-size: 35px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-bottom: 20px;
}
.signup-subheader {
  margin-top: 20px;
  font-size: 25px;
  font-family: mainFont;
  margin-bottom: 0;
}
.signup-form {
  display: flex;
  flex-direction: column;
  margin: 30px;
  margin-bottom: 15px;
}
.signup-input {
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
.signup-input::placeholder {
  color: #b9b9b9;
}
.signup-btn {
  border-style: none;
  height: 50px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 18px;
  color: #fff;
}
.signup-btn-google {
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
</style>
