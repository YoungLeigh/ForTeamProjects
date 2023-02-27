<template>
  <div class="signup">
    <div class="signup-header">
      <h1>ForTeamProjects</h1>
    </div>
    <div class="form-container">
      <form @submit.prevent="handleSubmit" class="signup-form">
        <input type="email" required placeholder="email" v-model="email" />
        <input
          type="password"
          required
          placeholder="password"
          v-model="password"
        />
        <button>Sign Up</button>
      </form>
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
}
.signup-header {
  margin-top: 50px;
  font-family: titleFont;
  font-size: 35px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
}
.signup-form {
  width: 300px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.form-container {
  height: 500px;
  width: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
}
</style>
