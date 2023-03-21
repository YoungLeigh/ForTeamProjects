<template>
  <div class="projectsEditModal">
    <div class="projectsEdit-container">
      <h3 class="projectsEdit-header">Task Info</h3>
      <hr class="projectsEdit-underline" />
      <div class="projectsEdit-modal-content">
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Task:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="projectsEdit-input-field"
            v-model="task"
          />
        </div>
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Information:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="projectsEdit-input-field"
            v-model="information"
          />
        </div>
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Deadline:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            class="projectsEdit-input-field"
            v-model="deadline"
          />
        </div>
        <div class="projectsEdit-input">
          <label class="projectsEdit-label">Link:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="projectsEdit-input-field"
            v-model="link"
          />
        </div>
        <div class="projectsEdit-flex">
          <VDatePicker v-model="dateTime" mode="dateTime">
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
import { doc, updateDoc } from "firebase/firestore";
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
    const task = ref(props.selectedInfo.task); //declaring variables from selectedInfo
    const information = ref(props.selectedInfo.information);
    const deadline = ref(props.selectedInfo.deadline); //declaring variables from selectedInfo
    const link = ref(props.selectedInfo.link);

    const dateTime = ref(new Date());
    const dateOptions = { month: "short", day: "2-digit", year: "numeric" }; //changing the date form to custom form
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

    const newDate = ref(dateTime.value.toLocaleString("en-US", dateOptions));
    const time = ref(dateTime.value.toLocaleString("en-US", timeOptions));
    const dateTimeData = ref(newDate.value + " " + time.value);

    const saveChanges = async () => {
      const documentRef = doc(db, "ProjectsInfo", props.selectedInfo.id);
      const updatedDocument = {
        description: description.value,
        date: date.value,
      };
      await updateDoc(documentRef, updatedDocument);
      // Emit an event to the parent component to indicate that the document has been saved
      emit("closeEditModal");
    };
    watch(dateTime, (newValue) => {
      //watching the changes in data (selecting the date in calendar) and applying change
      newDate.value = newValue.toLocaleString("en-US", dateOptions);
      time.value = newValue.toLocaleString("en-US", timeOptions);
      dateTimeData.value = newDate.value + " " + time.value;
      date.value = dateTimeData.value;
    });

    return { task, information, deadline, link, saveChanges, dateTime };
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
  width: 340px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.projectsEdit-header {
  font-size: 20px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 15px;
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

.form-group {
  margin-bottom: 1rem;
}
.projectsEdit-input-field {
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
  justify-content: space-between;
}
</style>
