<template>
  <section class="meetings-info">
    <div class="meetings-info-content">
      <div class="meetings-info-title">
        <p class="title">Meetings</p>
      </div>

      <table class="teaminfo-table">
        <thead>
          <th class="table-name meetings-info-th">Name</th>

          <th class="table-email meetings-info-th">Email</th>

          <th class="table-contact meetings-info-th">Contact</th>

          <th class="table-actions meetings-info-th"></th>
        </thead>
        <tbody v-for="info in teaminfo" :key="info.id" :id="info.id">
          <tr>
            <td style="display: none">{{ info.id }}</td>

            <td class="table-name meetings-info-td">{{ info.name }}</td>

            <td class="table-email meetings-info-td">{{ info.email }}</td>

            <td class="table-contact meetings-info-td">
              {{ info.contacts }}
            </td>

            <td class="td-btn meetings-info-td">
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
    </div>
    <div></div>
  </section>
</template>

<script>
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "@/firebase/config";

export default {
  name: "TeamInfo",
  props: {},
  components: {},
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
.meetings-info {
  background-color: #a6deae;
  margin-top: 15px;
  border-radius: 35px;
  color: #424954;
  display: inline-block;
  width: 750px;
  max-width: 750px;
  margin-top: 50px;
}
.meetings-info-content {
  display: flex;
  flex-direction: column;
  grid-template-columns:
    fit-content(150px)
    fit-content(250px)
    fit-content(350px) 1.5fr;
  padding: 30px;
  padding-top: 25px;
}
.meetings-info-title {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.meetings-info-title :nth-child(2) {
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

/*Input contents for meetings-info*/

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

.meetings-info-td {
  text-align: left;
  background-color: #e2f0d9;
  padding-left: 5px;
  font-size: 15px;
  height: 30px;
  border-radius: 7px;
}
.meetings-info-th {
  padding: 10px 0px;
  text-align: left;
  background-color: none;
  color: #424954;
  text-transform: uppercase;
  font-family: mainFont;
}
.meetings-info-tr {
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
