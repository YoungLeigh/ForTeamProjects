<template>
  <button type="button" class="team-close-btn btn--full2 edit-btn">
    <font-awesome-icon icon="fa-solid fa-pen-to-square" class="team-icon" />
  </button>
  <form
    @submit.prevent="handleEdit"
    v-if="openClose"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-model="true"
    role="dialog"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Member</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="showModal()"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><font-awesome-icon icon="fa-solid fa-user"
            /></span>
            <input
              v-model="memberName"
              type="text"
              class="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              v-model="memberEmail"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><font-awesome-icon icon="fa-solid fa-address-book"
            /></span>
            <input
              v-model="memberContacts"
              type="tel"
              class="form-control"
              placeholder="Contacts"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            :class="'btn btn-' + variant"
            data-bs-dismiss="modal"
            @click="handleEdit()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </form>
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
  // mounted() {
  //   fetch(this.uri)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.memberName = data.memberName;
  //       this.memberEmail = data.memberEmail;
  //       this.memberContacts = data.memberContacts;
  //     });
  // },
  // methods: {
  //   showModal() {
  //     this.openClose = !this.openClose;
  //   },
  //   handleEdit() {
  //     this.openClose = !this.openClose;
  //     fetch("http://localhost:3000/teaminfo", {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         memberName: this.memberName,
  //         memberEmail: this.memberEmail,
  //         memberContacts: this.memberContacts,
  //       }),
  //     })
  //       .then(() => {
  //         this.$emit("editUser");
  //       })
  //       .catch((err) => console.log(err));
  //   },
  // },
  // watch: {
  //   visible: function (newVal, oldVal) {
  //     this.openClose = newVal;
  //     console.log("new" + newVal + "==" + oldVal);
  //   },
  // },
};
</script>
<style></style>
