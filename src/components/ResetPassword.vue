<template>
  <div class="reset-password">
    <p class="reset-header">
      <h1>ForTeamProjects</h1></p>
      <div class="reset-container">
        <p class="reset-subheader">Reset Password</p>
        <form @submit.prevent="handleResetPassword" class="reset-form">
          <p class="input-sub">EMAIL</p>
          <input
          class="login-input"
          type="email"
          required
          placeholder="example@gmail.com"
          v-model="email"
        />
        <button class="login-btn" style="margin-bottom: 10px;">Reset Password</button>
        </form>
        <p style="color: #959595; font-size: 20px; margin-bottom: 7px">or</p>
        <Router-link class="resetpw-btn" to="/login">Back to Login</Router-link>
      </div>
  </div>
</template>
<script></script>
<style>
.reset-password {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #e8f3e1;
  font-family: mainFont;
}
.reset-header {
  margin-top: 50px;
  font-family: titleFont;
  font-size: 35px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-bottom: 20px;
}
.reset-subheader {
  margin-top: 20px;
  font-size: 25px;
  font-family: mainFont;
  margin-bottom: 0;
}
.reset-container{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
}
.reset-form{
  display: flex;
  flex-direction: column;
  margin: 15px 30px 15px 30px;
  margin-bottom: 5px;
}

</style>
