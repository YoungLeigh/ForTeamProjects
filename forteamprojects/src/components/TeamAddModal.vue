<template>
  <button
    @click="showModal()"
    class="team-add-btn btn--full1 btn--outline1"
    type="button"
  >
    +Add Member
  </button>
  <div
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
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="showModal()"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            :class="'btn btn-' + variant"
            data-bs-dismiss="modal"
            @click="showModal()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
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
    };
  },
  methods: {
    showModal() {
      this.openClose = !this.openClose;
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
