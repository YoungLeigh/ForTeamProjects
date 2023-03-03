<template>
  <div class="signup">
    <h1 class="login-header">ForTeamProjects</h1>
    <div class="reset-container">
      <p class="reset-subheader">Sign Up Now</p>
      <form @submit.prevent="handleSignUp" class="login-form">
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
        <button class="login-btn">Sign up with Email</button>
      </form>
      <p class="login-div-text">or</p>
      <button class="login-btn-google">
        <img class="google-icon" src="@/assets/images/google.png" />Sign up with
        Google
      </button>
    </div>
    <div class="signup-btns">
      <p style="margin: 10px 0 0 0; color: #424954">Already have an account?</p>
      <Router-Link class="signup-btn" to="/login">Login</Router-Link>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const store = useStore();

    const handleSubmit = () => {
      store.dispatch("signup", {
        email: email.value,
        password: password.value,
      });
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
  height: 100%;
  background-color: #e8f3e1;
  font-family: mainFont;
}
</style>
