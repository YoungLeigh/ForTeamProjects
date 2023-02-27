<template>
  <div class="signup">
    <div class="reset-header">
      <h1>ForTeamProjects</h1>
    </div>
    <div class="reset-container">
      <p class="reset-subheader">Sign Up Now</p>
      <form @submit.prevent="handleSignUp">
        <p class="input-sub">EMAIL</p>
        <input
          class="login-input"
          type="email"
          required
          placeholder="example@gmail.com"
          v-model="email"
        />
        <button class="login-btn" style="margin-bottom: 10px">
          Reset Password
        </button>
      </form>
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
