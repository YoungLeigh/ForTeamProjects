<template>
  <div class="signup">
    <div class="reset-header">
      <h1>ForTeamProjects</h1>
    </div>
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
        <button class="login-btn" style="margin-bottom: 10px">
          Sign up with Email
        </button>
      </form>
      <p style="color: #959595; font-size: 20px; margin-bottom: 7px">or</p>
      <button class="login-btn-google">
        <img class="google-icon" src="@/assets/images/google.png" />Sign up with
        Google
      </button>
    </div>
    <div class="signup-btns" style="display: flex; flex-direction: row">
      <p style="margin: 10px 0 0 0; color: #424954">Already have an account?</p>
      <Router-Link class="signup-btn" to="/login">Login</Router-Link>
    </div>
  </div>
</template>
<script></script>
<style>
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #e8f3e1;
  font-family: mainFont;
}
</style>
