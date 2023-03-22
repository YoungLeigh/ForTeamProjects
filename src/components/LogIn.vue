<template>
  <div class="login">
    <Router-link to="/" class="login-header">ForTeamProjects</Router-link>
    <div class="form-container">
      <p class="login-subheader">Sign In</p>
      <div class="login-error-msg" v-if="error">{{ error }}</div>
      <form @submit.prevent="handleLoginWithEmail" class="login-form">
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
          @keyup.enter.prevent="handleLoginWithEmail"
          class="login-input"
          type="password"
          required
          v-model="password"
        />
        <button @click="handleLoginWithEmail" class="login-btn">
          Sign in with Email
        </button>
      </form>
      <p class="login-div-text">or</p>
      <button @click="handleSignInWithGoogle" class="login-btn-google">
        <img class="google-icon" src="@/assets/images/google.png" />Continue
        with Google
      </button>
      <Router-Link class="resetpw-btn" to="/reset-password"
        >Forgot Password?</Router-Link
      >
    </div>
    <div class="signup-btns">
      <p class="login-ask-text">Haven't signed up yet?</p>
      <Router-Link class="signup-btn" to="/signup">Create Account</Router-Link>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "login",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleLoginWithEmail = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        email.value = "";
        password.value = "";
        console.log(err.code);
        switch (err.code) {
          case "auth/user-not-found":
            err.message = "Invalid email address";
            break;
          case "auth/wrong-password":
            err.message = "Invalid password";
            break;
          default:
            err.message = "An error occurred. Please try again later.";
        }
        error.value = err.message;
      }
    };
    const handleSignInWithGoogle = async () => {
      try {
        await store.dispatch("signInWithGoogle");
        router.push("/");
      } catch (err) {
        console.log(err);
        error.value = err.message;
      }
    };

    return {
      email,
      password,
      error,
      handleLoginWithEmail,
      handleSignInWithGoogle,
    };
  },
};
</script>
<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #e8f3e1;
  font-family: mainFont;
}
.login-header {
  font-family: titleFont;
  font-size: 45px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 30px;
  margin-bottom: 30px;
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
  margin: 15px 30px 0px 30px;
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
  font-size: 19px;
}
.login-input::placeholder {
  color: #b9b9b9;
}
.login-div-text {
  color: #959595;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.login-btn {
  border-style: none;
  height: 50px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 18px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  margin-bottom: 20px;
}
.signup-btns {
  display: flex;
  flex-direction: row;
}
.login-ask-text {
  margin: 10px 0 0 0;
  color: #424954;
}
.login-error-msg {
  color: #f0300e;
  font-size: 15px;
  margin-top: 10px;
}
</style>
