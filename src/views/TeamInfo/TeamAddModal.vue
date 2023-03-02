<template>
  <div class="teamAddModal">
    <table>
      <tbody>
        <tr>
          <td class="table-name"><input type="text" name="input1" /></td>

          <td class="table-email"><input type="text" name="input1" /></td>

          <td class="table-actions"><input type="text" name="input1" /></td>

          <td class="td-btn"></td>
        </tr>
      </tbody>
    </table>
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
      memberName: "",
      memberEmail: "",
      memberContacts: "",
    };
  },
  methods: {
    showModal() {
      this.openClose = !this.openClose;
    },
    handleSave() {},
  },
};
</script>

<style>
.teamAddModal {
  height: 100%;
  background: none;
  left: 0;
  right: 0;
}
</style>
