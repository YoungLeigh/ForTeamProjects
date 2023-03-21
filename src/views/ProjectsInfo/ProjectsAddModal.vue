<template>
  <div class="projectsAddModal">
    <div class="projectsAdd-container">
      <h3 class="projectsAdd-header">Add New Task</h3>
      <hr class="projectsAdd-underline" />
      <div class="projectsAdd-modal-content">
        <div class="projectsAdd-input">
          <label class="projectsAdd-label">Task:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="projectsAdd-input-field"
            v-model="task"
          />
        </div>
        <div class="projectsAdd-input">
          <label class="projectsAdd-label">Information:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            class="projectsAdd-input-field"
            v-model="information"
          />
        </div>
        <div class="projectsAdd-input">
          <label class="projectsAdd-label">Deadline:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            class="projectsAdd-input-field"
            v-model="deadline"
          />
        </div>
        <div class="projectsAdd-input">
          <label class="projectsAdd-label">Link:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            class="projectsAdd-input-field"
            v-model="link"
          />
        </div>
        <div class="projectsAdd-flex">
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
          <button @click="addNewTask" class="edit-submit-btn" type="submit">
            Save
          </button>
        </div>

        <button @click="closeAddModal" id="projectsAdd-close-btn">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  name: "projectsAddModal",
  setup(props, { emit }) {
    const task = ref(""); //declaring variables from selectedInfo
    const information = ref("");
    const link = ref("");

    const dateTime = ref(new Date());
    const dateOptions = { month: "short", day: "2-digit", year: "numeric" }; //changing the date form to custom form

    const deadline = ref(dateTime.value.toLocaleString("en-US", dateOptions));

    const addNewTask = async () => {
      await addDoc(collection(db, "ProjectsInfo"), {
        task: task.value,
        information: information.value,
        deadline: deadline.value,
        link: link.value,
        timestamp: serverTimestamp(), // add timestamp field
      });
      task.value = "";
      information.value = "";
      link.value = "";
      deadline.value = "";
      // emit("closeAddModal");
    };

    watch(dateTime, (newValue) => {
      //watching the changes in data (selecting the date in calendar) and applying change
      dateTime.value = newValue.toLocaleString("en-US", dateOptions);
      deadline.value = dateTime.value;
    });

    return { task, information, deadline, link, dateTime, addNewTask };
  },
  methods: {
    closeAddModal() {
      this.$emit("closeAddModal");
    },
  },
};
</script>
<style scoped>
.projectsAddModal {
  position: fixed;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 340px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.projectsAdd-header {
  font-size: 20px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 15px;
  margin-bottom: 0px;
}
.projectsAdd-underline {
  border: 0;
  clear: both;
  display: block;
  width: 50%;
  background-color: #4f4f4fc4;
  height: 1px;
  margin-left: 0;
  margin-bottom: 15px;
}
.projectsAdd-container {
  display: flex;
  flex-direction: column;
  color: #424954;
  margin-left: 15px;
  padding-bottom: 15px;
}
.projectsAdd-modal-container {
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
.projectsAdd-input {
  margin-bottom: 7px;
}

.form-group {
  margin-bottom: 1rem;
}
.projectsAdd-input-field {
  width: 90%;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  font-family: mainFont, korFont;
  font-size: 16px;
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
  margin-left: 20px;
  margin-right: 25px;
  padding-left: 15px;
  padding-right: 15px;
}
#projectsAdd-close-btn {
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
#projectsAdd-close-btn:hover,
#projectsAdd-close-btn:active {
  color: rgb(249, 112, 112);
}

.projectsAdd-label {
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
.projectsAdd-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
