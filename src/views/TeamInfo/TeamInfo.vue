<template>
  <section class="team-info">
    <div class="team-info-content">
      <div class="team-info-title">
        <p class="title">Members</p>
      </div>

      <table class="teaminfo-table">
        <thead>
          <th class="table-name team-info-th">Name</th>

          <th class="table-email team-info-th">Email</th>

          <th class="table-contact team-info-th">Contact</th>

          <th class="table-actions team-info-th"></th>
        </thead>
        <tbody v-for="info in teaminfo" :key="info.id" :id="info.id">
          <tr>
            <td style="display: none">{{ info.id }}</td>

            <td class="table-name team-info-td">{{ info.name }}</td>

            <td class="table-email team-info-td">{{ info.email }}</td>

            <td class="table-contact team-info-td">{{ info.contacts }}</td>

            <td class="td-btn team-info-td">
              <TeamEditModal
                v-if="showEditInfo"
                @closeEditModal="closeEditModal"
                :selectedInfo="selectedInfo"
              ></TeamEditModal>
              <button
                type="button"
                class="team-close-btn btn--full2 edit-btn"
                @click="selectDocument(info)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-pen-to-square"
                  class="team-icon"
                />
              </button>
              <button
                @click="deleteUserData(info.id)"
                type="button"
                class="team-close-btn"
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
          v-if="addModal"
          @closeAddBtn="handleAddModal"
        ></TeamAddModal>
        <button
          v-if="addTeambtn"
          @click="handleAddModal"
          class="team-add-btn btn--full1 btn--outline1"
          type="button"
        >
          +Add Member
        </button>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script>
import TeamAddModal from "./TeamAddModal.vue";
import TeamEditModal from "./TeamEditModal.vue";
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "@/firebase/config";

export default {
  name: "TeamInfo",
  props: {},
  components: {
    TeamAddModal,
    TeamEditModal,
  },
  setup() {
    let addModal = ref(false); //team adding modal
    let editModal = ref(false); //team editing modal
    let addTeambtn = ref(true); //team adding button
    const teaminfo = ref([]);
    const handleAddModal = () => {
      //toggle team add Modal
      addModal.value = !addModal.value;
      addTeambtn.value = !addTeambtn.value;
    };

    const showEditInfo = ref(false);
    const selectedInfo = ref(null);
    const documents = ref([]);

    const selectDocument = async (info) => {
      if (!info) {
        return;
      }
      // Set the selectedInfo ref to the selected document
      selectedInfo.value = info;
      showEditInfo.value = true;
      console.log(selectedInfo.value.name);
    };
    const closeEditModal = () => {
      // Reset the selected document and hide the editor
      selectedInfo.value = null;
      showEditInfo.value = false;
    };

    const deleteUserData = async (id) => {
      await deleteDoc(doc(db, "TeamInfo", id)); //deleting target document in the database
    };
    // const handleEditModal = function () {
    //   editModal.value = !editModal.value;
    // };

    onMounted(async () => {
      //gets data from firestore in real-time using onSnapshot
      onSnapshot(
        collection(db, "TeamInfo"), //query to call the database value
        (querySnapshot) => {
          const userCollection = [];
          querySnapshot.forEach((doc) => {
            //reading all the document data from the database
            const userData = {
              //variable to save each data in the field
              id: doc.id,
              name: doc.data().name,
              email: doc.data().email,
              contacts: doc.data().contacts,
              timestamp: doc.data().timestamp, // add timestamp field to userData object
            };
            userCollection.push(userData);
          });
          userCollection.sort((a, b) => a.timestamp - b.timestamp); // Sort userCollection array by timestamp field
          teaminfo.value = userCollection; //all the data is then saved in the teaminfo variable.
        }
      );
    });

    return {
      teaminfo,
      addModal,
      addTeambtn,
      editModal,
      selectedInfo,
      showEditInfo,
      documents,
      selectDocument,
      handleAddModal,
      deleteUserData,
      closeEditModal,
    };
  },
};
</script>

<style>
.team-info {
  background-color: #a6deae;
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
  padding: 30px;
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
  margin-left: 5px;
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
.team-add-btn {
  width: 98%;
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
  margin-left: 4px;
}
.btn--outline1:hover,
.btn--outline1:active {
  background-color: #ffffff52;
  box-shadow: inset 0 0 0 1.5px #fff;
  border-style: none;
}
.teaminfo-table {
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  border-collapse: separate;
  border-spacing: 6px 8px;
}

.team-info-td {
  text-align: left;
  background-color: #e2f0d9;
  padding-left: 5px;
  font-size: 15px;
  height: 30px;
  border-radius: 7px;
}
.team-info-th {
  padding: 10px 0px;
  text-align: left;
  background-color: none;
  color: #424954;
  text-transform: uppercase;
  font-family: mainFont;
}
.team-info-tr {
  width: 100%;
}
.td-btn {
  display: flex;
  flex-direction: row;
  background-color: #a6deae;
}
.edit-btn {
  background-color: transparent;
  border: none;
}
.edit-btn:hover,
.edit-btn:active {
  color: #a6deae;
}
.team-icon {
  width: 20px;
  color: #424954;
}
.team-icon:hover,
.team-icon:active {
  color: rgb(209, 248, 215);
}
.team-icon1:hover,
.team-icon1:active {
  color: rgb(249, 112, 112);
}
.team-icon1 {
  width: 17px;
  color: #424954;
}
.table-name {
  width: 28%;
}
/* .table-email {
  width: 35%;
} */
.table-contact {
  width: 20%;
}
.table-actions {
  width: 10%;
}
</style>
