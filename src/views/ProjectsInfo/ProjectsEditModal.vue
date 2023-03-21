<template>
  <div class="projectsEditModal">
    <div class="projectsEdit-container">
      <div class="projectsEdit-header-container">
        <h3 class="projectsEdit-header">Task Info</h3>
        <button @click="deleteUserData" class="edit-delete-btn" type="submit">
          Delete
        </button>
      </div>
      <hr class="projectsEdit-underline" />
      <div class="projectsEdit-modal-content">
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Task:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="projectsEdit-input-field"
            v-model="task"
            :readonly="!isEditable"
          />
        </div>
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Information:</label>
          <textarea
            @keyup.enter.prevent="saveChanges"
            type="textarea"
            class="projectsEdit-input-field"
            v-model="information"
            :readonly="!isEditable"
          />
        </div>
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Deadline:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            class="projectsEdit-input-field"
            v-model="deadline"
            :readonly="!isEditable"
          />
        </div>
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Link:</label>
          <textarea
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="projectsEdit-input-field"
            v-model="link"
            :readonly="!isEditable"
          />
        </div>
        <div class="projectsEdit-flex">
          <VDatePicker v-model="dateTime">
            <template #default="{ togglePopover }">
              <button
                class="team-close-btn1 btn--full2 edit-btn"
                @click="togglePopover"
              >
                <font-awesome-icon
                  class="team-icon5"
                  icon="fa-regular fa-calendar"
                />
              </button>
            </template>
          </VDatePicker>
          <button @click="toggleEdit" class="edit-edit-btn" type="submit">
            Edit
          </button>
          <button @click="saveChanges" class="edit-submit-btn" type="submit">
            Save
          </button>
        </div>

        <button @click="closeEditModal" id="projectsEdit-close-btn">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, watch } from "vue";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export default defineComponent({
  name: "projectsEditModal",
  props: {
    //receiving selectedInfo as props
    selectedInfo: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const task = ref(props.selectedInfo.task);
    const information = ref(props.selectedInfo.information);
    const deadline = ref(props.selectedInfo.deadline);
    const link = ref(props.selectedInfo.link);

    const isEditable = ref(false);

    const dateTime = ref(new Date());
    const dateOptions = { month: "short", day: "2-digit", year: "numeric" }; //changing the date form to custom form

    const newDate = ref(dateTime.value.toLocaleString("en-US", dateOptions));
    const dateTimeData = ref(newDate.value);

    const toggleEdit = function () {
      isEditable.value = !isEditable.value;
    };
    const saveChanges = async () => {
      const documentRef = doc(db, "ProjectsInfo", props.selectedInfo.id);
      const updatedDocument = {
        task: task.value,
        information: information.value,
        deadline: deadline.value,
        link: link.value,
      };
      await updateDoc(documentRef, updatedDocument);
      // Emit an event to the parent component to indicate that the document has been saved
      emit("closeEditModal");
    };
    const deleteUserData = async () => {
      await deleteDoc(doc(db, "ProjectsInfo", props.selectedInfo.id)); //deleting target document in the database
      emit("closeEditModal");
    };
    watch(dateTime, (newValue) => {
      //watching the changes in data (selecting the date in calendar) and applying change
      newDate.value = newValue.toLocaleString("en-US", dateOptions);
      deadline.value = newDate.value;
    });

    return {
      task,
      information,
      deadline,
      link,
      saveChanges,
      deleteUserData,
      toggleEdit,
      dateTime,
      isEditable,
    };
  },
  methods: {
    closeEditModal() {
      this.$emit("closeEditModal");
    },
  },
});
</script>
<style scoped>
.projectsEditModal {
  position: fixed;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 500px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.projectsEdit-header {
  font-size: 20px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0px;
}
.projectsEdit-underline {
  border: 0;
  clear: both;
  display: block;
  width: 50%;
  background-color: #4f4f4fc4;
  height: 1px;
  margin-left: 0;
  margin-bottom: 15px;
}
.projectsEdit-container {
  display: flex;
  flex-direction: column;
  color: #424954;
  margin-left: 15px;
  padding-bottom: 15px;
}
.projectsEdit-modal-container {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.projectsEdit-input {
  margin-bottom: 7px;
}
.projectsEdit-input-field {
  width: 90%;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  font-family: mainFont, korFont;
  font-size: 13px;
  background-color: none;
  border: 1.7px solid #424954c7;
}
.edit-submit-btn {
  border-style: none;
  height: 33px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 16px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.edit-edit-btn {
  border-style: none;
  height: 33px;
  background-color: #424954;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 16px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.edit-delete-btn {
  border-style: none;
  height: 25px;
  background-color: #be0020;
  border-radius: 5px;
  font-family: mainFont, korFont;
  font-size: 14px;
  color: #fff;
  box-shadow: rgba(165, 149, 154, 0.2) 0px 8px 24px;
  cursor: pointer;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
#projectsEdit-close-btn {
  background-color: transparent;
  border: none;
  font-family: mainFont;
  font-size: 25px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #424954;
}
#projectsEdit-close-btn:hover,
#projectsEdit-close-btn:active {
  color: rgb(249, 112, 112);
}

.projectsEdit-label {
  display: block;
  margin-bottom: 2px;
  color: #424954;
}
.team-icon5 {
  width: 23px;
  color: #424954;
}
.team-icon5:hover,
.team-icon5:active {
  color: rgb(0, 88, 113);
}
.projectsEdit-flex {
  display: flex;
  flex-direction: row;
}
.projectsEdit-header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
}
</style>
