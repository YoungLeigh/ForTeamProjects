<template>
  <div class="teamEditModal">
    <table class="teamAddModal-table">
      <thead>
        <th class="table-name team-add-th">+ Add a Member</th>

        <th class="table-email team-add-th"></th>

        <th class="table-contact team-add-th"></th>

        <th class="table-actions team-add-th"></th>
      </thead>
      <tbody>
        <tr class="team-info-tr">
          <td class="table-name team-info-td">
            <input
              @keyup.enter.prevent="addNewMember"
              @keyup.escape.prevent="closeAddBtn"
              class="team-add-input"
              type="text"
              name="newName"
              placeholder="Name"
              v-model="memberName"
            />
          </td>

          <td class="table-email team-info-td">
            <input
              @keyup.enter.prevent="addNewMember"
              @keyup.escape.prevent="closeAddBtn"
              class="team-add-input"
              type="email"
              name="newEmail"
              placeholder="example@gmail.com"
              v-model="memberEmail"
            />
          </td>

          <td class="table-contact team-info-td">
            <input
              @keyup.enter.prevent="addNewMember"
              @keyup.escape.prevent="closeAddBtn"
              class="team-add-input"
              type="text"
              name="newContacts"
              placeholder="000-000-000"
              v-model="memberContacts"
            />
          </td>

          <td class="td-btn team-info-td">
            <button
              @click="addNewMember"
              class="team-close-btn1 btn--full2 edit-btn"
            >
              <font-awesome-icon class="team-icon3" icon="fa-solid fa-check" />
            </button>
            <button @click="closeAddBtn" class="team-close-btn">
              <font-awesome-icon class="team-icon4" icon="fa-solid fa-xmark" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
  top: 50%;
  left: 0;
  right: 0;
  height: 350px;
}
</style>
