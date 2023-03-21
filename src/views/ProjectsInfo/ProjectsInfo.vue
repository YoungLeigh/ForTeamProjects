<template>
  <section class="projects-info">
    <div class="projects-info-content">
      <div class="projects-info-title">
        <p class="title">Tasks</p>
      </div>

      <table class="projectsinfo-table">
        <thead>
          <th class="table-task projects-info-th">Task</th>

          <th class="table-info projects-info-th">Information</th>
          <th class="table-deadline projects-info-th">Deadline</th>
          <th class="table-actions projects-info-th"></th>
        </thead>
        <tbody v-for="info in projectsinfo" :key="info.id" :id="info.id">
          <tr>
            <td style="display: none">{{ info.id }}</td>

            <td class="table-task projects-info-td">
              {{ info.task }}
            </td>
            <td class="table-info projects-info-td">
              {{ info.information }}
            </td>

            <td class="table-deadline projects-info-td">{{ info.deadline }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <ProjectsAddModal
          v-if="addModal"
          @closeAddModal="handleAddModal"
        ></ProjectsAddModal>
        <button
          v-if="addTeambtn"
          @click="handleAddModal"
          class="team-add-btn btn--full1 btn--outline1"
          type="button"
        >
          +Add Project
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "@/firebase/config";
import ProjectsAddModal from "./ProjectsAddModal.vue";

export default {
  name: "projectsinfo",
  props: {},
  components: { ProjectsAddModal },
  setup() {
    const selectedDate = ref({
      month: "",
      day: "",
      year: "",
      time: "",
    });

    let showCalendar = ref(false); // showing calendar
    const calendarColor = ref("teal");

    let addModal = ref(false); //team adding modal
    let editModal = ref(false); //team editing modal
    let addTeambtn = ref(true); //team adding button
    const projectsinfo = ref([]);
    const handleAddModal = () => {
      //toggle team add Modal
      addModal.value = !addModal.value;
      addTeambtn.value = !addTeambtn.value;
    };
    const showEditInfo = ref(false);
    const selectedInfo = ref(null);
    const documents = ref([]);

    const handleShowCalendar = () => {
      showCalendar.value = !showCalendar.value; //toggles showing calendar
    };
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
      await deleteDoc(doc(db, "ProjectsInfo", id)); //deleting target document in the database
    };
    // const handleEditModal = function () {
    //   editModal.value = !editModal.value;
    // };

    onMounted(async () => {
      //gets data from firestore in real-time using onSnapshot
      onSnapshot(
        collection(db, "ProjectsInfo"), //query to call the database value
        (querySnapshot) => {
          const userCollection = [];
          querySnapshot.forEach((doc) => {
            //reading all the document data from the database
            const userData = {
              //variable to save each data in the field
              id: doc.id,
              task: doc.data().task,
              information: doc.data().information,
              deadline: doc.data().deadline,
              timestamp: doc.data().timestamp, // add timestamp field to userData object
            };
            userCollection.push(userData);
          });
          userCollection.sort((a, b) => a.timestamp - b.timestamp); // Sort userCollection array by timestamp field
          projectsinfo.value = userCollection; //all the data is then saved in the meetingsinfo variable.
        }
      );
    });

    return {
      showCalendar,
      calendarColor,
      handleShowCalendar,
      projectsinfo,
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

<style scoped>
.projects-info {
  background-color: #a6deae;
  margin-top: 15px;
  border-radius: 35px;
  color: #424954;
  display: inline-block;
  width: 750px;
  max-width: 750px;
  margin-top: 30px;
}
.projects-info-content {
  display: flex;
  flex-direction: column;
  grid-template-columns:
    fit-content(150px)
    fit-content(250px)
    fit-content(350px) 1.5fr;
  padding: 30px;
  padding-top: 25px;
}
.projects-info-title {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.projects-info-title :nth-child(2) {
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

/*Input contents for projects-info*/

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
.projectsinfo-table {
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  border-collapse: separate;
  border-spacing: 6px 8px;
}

.projects-info-td {
  text-align: left;
  background-color: #e2f0d9;
  padding-left: 5px;
  font-size: 15px;
  height: 30px;
  border-radius: 7px;
  white-space: nowrap; /* Prevents text from wrapping to a new line */
  overflow: hidden; /* Hides any overflow text */
  text-overflow: ellipsis; /* Adds an ellipsis to the end of the text */
  max-width: 100px; /* Sets a maximum width for the table cell */
}
.projects-info-th {
  padding: 10px 0px;
  text-align: left;
  background-color: none;
  color: #424954;
  text-transform: uppercase;
  font-family: mainFont;
}
.projects-info-tr {
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
.table-task {
  width: 30%;
}
.table-info {
  width: 50%;
}
.table-deadline {
  width: 20%;
}
.projects-info-calendar {
  position: fixed;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
