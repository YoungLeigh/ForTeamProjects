<template>
  <div class="signup">
    <Router-link to="/" class="login-header">ForTeamProjects</Router-link>
    <div class="reset-container">
      <p class="reset-subheader">Sign Up Now</p>
      <div class="login-error-msg" v-if="error">{{ error }}</div>
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
        <button @click="handleSubmit" type="submit" class="login-btn">
          Sign up with Email
        </button>
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signUp", {
          email: email.value,
          password: password.value,
        });
        router.push("/login");
      } catch (err) {
        email.value = "";
        password.value = "";
        error.value = err.message;
      }
    };
    return { email, password, error, handleSubmit };
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
