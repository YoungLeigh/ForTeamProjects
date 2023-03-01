<template>
  <section class="team-info">
    <div class="team-info-content">
      <div class="team-info-title">
        <p class="title">Team Info</p>
      </div>

      <table>
        <thead>
          <th class="table-name">Name</th>

          <th class="table-email">Email</th>

          <th class="table-contact">Contact</th>

          <th class="table-actions">Actions</th>
        </thead>
        <tbody
          v-for="info in $store.state.teaminfo"
          :key="info.id"
          :id="info.id"
        >
          <tr>
            <td style="display: none">{{ info.id }}</td>

            <td>{{ info.name }}</td>

            <td>{{ info.email }}</td>

            <td>{{ info.contacts }}</td>

            <td class="td-btn">
              <TeamEditModal
                :info="info"
                :visible="false"
                variant="success"
                @editUser="saveData()"
              ></TeamEditModal>

              <button
                @click="deleteData(id)"
                type="button"
                class="team-close-btn btn--full2"
              >
                <font-awesome-icon
                  icon="fa-solid fa-trash"
                  class="team-icon1"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <TeamAddModal
          :visible="false"
          variant="success"
          @addUser="saveData()"
        ></TeamAddModal>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script>
import TeamAddModal from "./TeamAddModal.vue";
import TeamEditModal from "./TeamEditModal.vue";

export default {
  name: "TeamInfo",
  props: {},
  components: {
    TeamAddModal,
    TeamEditModal,
  },
  data() {
    return {
      uri: "http://localhost:3000/teaminfo/",
    };
  },
  methods: {
    // saveData() {
    //   fetch("http://localhost:3000/teaminfo")
    //     .then((res) => res.json())
    //     .then((data) => (this.teaminfo = data))
    //     .catch((err) => console.log(err.message));
    // },
    // deleteData(id) {
    //   fetch(this.uri + id, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json()) // or res.json()
    //     .then((data) => (this.teaminfo = data))
    //     .catch((err) => console.log(err.message));
    // },
  },
  mounted() {
    // fetch(" http://localhost:3000/teaminfo")
    //   .then((res) => res.json())
    //   .then((data) => (this.teaminfo = data))
    //   .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.team-info {
  background-color: #fff;
  margin-top: 15px;
  border-radius: 35px;
  color: #424954;
  display: inline-block;
  width: 750px;
  max-width: 750px;
}
.team-info-content {
  display: flex;
  flex-direction: column;
  grid-template-columns:
    fit-content(150px)
    fit-content(250px)
    fit-content(350px) 1.5fr;
  padding: 35px;
  padding-top: 25px;
}
.team-info-title {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.team-info-title :nth-child(2) {
  margin-left: 20px;
  margin-right: 5px;
}
.title {
  font-size: 25px;
  margin: 0;
}
#main-btn {
  height: 30px;
  width: 60px;
  color: white;
}

/*Input contents for team-info*/

.team-close-btn {
  background-color: transparent;
  border: none;
  font-family: mainFont;
  font-size: 35px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  cursor: pointer;
}
.btn--full2:hover,
.btn--full2:active {
  color: rgb(249, 112, 112);
}
.team-add-btn {
  width: 100%;
  height: 30px;
  border-style: dotted;
  border-width: 1.5px;
  display: block;
  background-color: transparent;
  border-color: white;
  color: white;
  font-family: mainFont;
  font-size: 17px;
  border-radius: 10px;
  margin-top: 5px;
  transition: all 0.3s;
  cursor: pointer;
}
.btn--outline1:hover,
.btn--outline1:active {
  background-color: #ffffff52;
  box-shadow: inset 0 0 0 1.5px #fff;
  border-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
}

td {
  padding: 0px 0px;
  text-align: left;
  background-color: #cfcfcf;
  border-radius: 10px;
}
th {
  padding: 10px 0px;
  text-align: left;
  background-color: none;
  color: #424954;
  text-transform: uppercase;
  font-family: mainFont;
}
tr {
  width: 100%;
}
td {
  font-size: 15px;
}
.td-btn {
  display: flex;
  flex-direction: row;
}
.edit-btn {
  background-color: transparent;
  border: none;
}
.edit-btn:hover,
.edit-btn:active {
  color: rgb(8, 207, 147);
}
.team-icon {
  width: 20px;
}
.team-icon1 {
  width: 17px;
}
.table-name {
  width: 25%;
  background-color: none;
}
.table-email {
  width: 35%;
}
.table-contact {
  width: 20%;
}
.table-actions {
  width: 10%;
}
</style>
