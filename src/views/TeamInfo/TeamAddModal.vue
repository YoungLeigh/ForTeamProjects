<template>
  <div class="teamAddModal">
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
              class="team-add-input"
              type="text"
              name="newName"
              placeholder="Name"
              v-model="memberName"
            />
          </td>

          <td class="table-email team-info-td">
            <input
              class="team-add-input"
              type="email"
              name="newEmail"
              placeholder="example@gmail.com"
              v-model="memberEmail"
            />
          </td>

          <td class="table-contact team-info-td">
            <input
              class="team-add-input"
              type="text"
              name="newContacts"
              placeholder="000-000-000"
              v-model="memberContacts"
            />
          </td>

          <td class="td-btn team-info-td">
            <button class="team-close-btn1 btn--full2 edit-btn">
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
import { ref } from "vue";
// import { useStore } from "vuex";

export default {
  name: "TeamAddModal",
  emit: ["closeAddBtn"],
  setup(props, context) {
    const newData = ref({
      memberName: "",
      memberEmail: "",
      memberContacts: "",
    });
    const closeAddBtn = () => {
      context.emit("closeAddBtn");
    };
    return { newData, closeAddBtn };
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
.team-add-input {
  width: 90%;
  background: none;
  border: none;
  font-family: mainFont;
  font-size: 15px;
  color: #424954;
}
.teamAddModal-table {
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  border-collapse: separate;
  border-spacing: 6px 8px;
}
.team-icon3 {
  width: 22px;
  color: rgb(209, 248, 215);
}
.team-icon3:hover,
.team-icon3:active {
  color: rgb(158, 252, 172);
}
.team-icon4 {
  width: 15px;
  color: rgb(209, 248, 215);
}
.team-icon4:hover,
.team-icon4:active {
  color: rgb(249, 112, 112);
}
.team-close-btn1 {
  background-color: transparent;
  border: none;
  font-family: mainFont;
  font-size: 35px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
}
.team-add-th {
  text-align: left;
  color: rgb(225, 250, 229);
  font-size: 20px;
}
</style>
