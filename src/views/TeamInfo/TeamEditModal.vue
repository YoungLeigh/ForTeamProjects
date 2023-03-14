<template>
  <div class="teamEditModal">
    <div class="teamEdit-container">
      <h3>Edit information</h3>
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
  left: 0;
  right: 0;
  background-color: #424954;
  width: 360px;
  right: 155px;
  top: 0;
  left: 0;
}
.teamEdit-container {
  display: flex;
  flex-direction: column;
  color: #fff;
}
</style>
