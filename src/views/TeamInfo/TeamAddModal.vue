<template>
  <button
    @click="showModal()"
    class="team-add-btn btn--full1 btn--outline1"
    type="button"
  >
    +Add Member
  </button>
  <form
    @submit.prevent="handleSave"
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
            @click="handleSave()"
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
  name: "TeamAddModal",
  props: {
    visible: Boolean,
    variant: String,
  },
  data() {
    return {
      openClose: this.visible,
      memberName: "",
      memberEmail: "",
      memberContacts: "",
    };
  },
  methods: {
    showModal() {
      this.openClose = !this.openClose;
    },
    handleSave() {
      if (this.memberName.length > 0) {
        console.log(this.memberName, this.memberEmail, this.memberContacts);
        this.openClose = !this.openClose;
        let userData = {
          name: this.memberName,
          email: this.memberEmail,
          contacts: this.memberContacts,
        };
        fetch("http://localhost:3000/teaminfo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then(() => {
            this.$emit("addUser");
          })
          .catch((err) => console.log(err));
        this.memberName = "";
        this.memberEmail = "";
        this.memberContacts = "";
      }
    },
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.openClose = newVal;
      console.log("new" + newVal + "==" + oldVal);
    },
  },
};
</script>

<style></style>
