<template>
  <div class="teamEditModal">
    <div class="teamEdit-container">
      <h3 class="teamEdit-header">Edit information</h3>
      <hr class="teamEdit-underline" />
      <div class="teamEdit-modal-content">
        <div class="teamEdit-input">
          <label class="teamEdit-label">Name:</label>
          <input
            type="text"
            class="teamEdit-input-field"
            v-model="name.value"
          />
        </div>
        <div class="teamEdit-input">
          <label class="teamEdit-label">Email:</label>
          <input type="email" class="teamEdit-input-field" />
        </div>
        <div class="teamEdit-input">
          <label class="teamEdit-label">Contacts:</label>
          <input type="tel" class="teamEdit-input-field" />
        </div>
        <button class="edit-submit-btn" type="submit">Save</button>
        <button @click="closeEditModal" id="teamEdit-close-btn">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamEditModal",
  data() {
    return {
      openClose: this.visible,
      memberName: "",
      memberEmail: "",
      memberContacts: "",
    };
  },
  methods: {
    closeEditModal() {
      this.$emit("closeEditModal");
    },
  },
};
</script>
<style>
.teamEditModal {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 340px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.teamEdit-header {
  font-size: 20px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 15px;
  margin-bottom: 0px;
}
.teamEdit-underline {
  border: 0;
  clear: both;
  display: block;
  width: 50%;
  background-color: #4f4f4fc4;
  height: 1px;
  margin-left: 0;
  margin-bottom: 15px;
}
.teamEdit-container {
  display: flex;
  flex-direction: column;
  color: #424954;
  margin-left: 15px;
  padding-bottom: 15px;
}
.teamEdit-modal-container {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.teamEdit-input {
  margin-bottom: 7px;
}

.form-group {
  margin-bottom: 1rem;
}
.teamEdit-input-field {
  width: 90%;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  font-family: mainFont, korFont;
  font-size: 16px;
  background-color: none;
  border: 1.7px solid #424954c7;
}
.edit-submit-btn {
  border-style: none;
  height: 33px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 16px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 71.5%;
  padding-left: 15px;
  padding-right: 15px;
}
#teamEdit-close-btn {
  background-color: transparent;
  border: none;
  font-family: mainFont;
  font-size: 25px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #424954;
}
#teamEdit-close-btn:hover,
#teamEdit-close-btn:active {
  color: rgb(249, 112, 112);
}

.teamEdit-label {
  display: block;
  margin-bottom: 2px;
  color: #424954;
}
</style>
