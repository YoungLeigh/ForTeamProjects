<template>
  <div class="teamEditModal">
    <div class="teamEdit-container">
      <h3 class="teamEdit-header">Edit information</h3>
      <div class="teamEdit-modal-content">
        <div class="teamEdit-input">
          <label class="teamEdit-label">Name:</label>
          <input type="text" class="teamEdit-input" />
        </div>
        <div class="teamEdit-input">
          <label class="teamEdit-label">Email:</label>
          <input type="email" class="teamEdit-input" />
        </div>
        <div class="teamEdit-input">
          <label class="teamEdit-label">Contacts:</label>
          <input type="tel" class="teamEdit-input" />
        </div>
        <button class="edit-submit-btn" type="submit">Submit</button>
        <button id="teamEdit-close-btn">
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
  width: 360px;
  border-radius: 15px;
}
.teamEdit-header {
  font-size: 25px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 15px;
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
.edit-submit-btn {
  border-style: none;
  height: 30px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 18px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.teamEdit-input {
  width: 90%;
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
}
#teamEdit-close-btn:hover,
#teamEdit-close-btn:active {
  color: rgb(249, 112, 112);
}

.teamEdit-label {
  display: block;
  margin-bottom: 5px;
}
</style>
