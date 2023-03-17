<template>
  <div class="teamEditModal">
    <div class="teamEdit-container">
      <h3>Edit information</h3>
      <div class="modal-content">
        <form>
          <div class="form-group">
            <label for="name-input">Name:</label>
            <input type="text" id="name-input" name="name" />
          </div>
          <div class="form-group">
            <label for="email-input">Email:</label>
            <input type="email" id="email-input" name="email" />
          </div>
          <div class="form-group">
            <label for="phone-input">Contacts:</label>
            <input type="tel" id="phone-input" name="phone" />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button id="close-modal">Close Modal</button>
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
  background-color: #424954;
  width: 360px;
}
.teamEdit-container {
  display: flex;
  flex-direction: column;
  color: #383838;
}
.modal-container {
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

.modal-content {
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0;
}
</style>
