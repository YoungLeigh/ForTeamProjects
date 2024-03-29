<template>
  <div class="meetingsEditModal">
    <div class="meetingsEdit-container">
      <h3 class="meetingsEdit-header">Edit Meetings Info</h3>
      <hr class="meetingsEdit-underline" />
      <div class="meetingsEdit-modal-content">
        <div class="meetingsEdit-input">
          <label class="meetingsEdit-label">Information:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            type="text"
            class="meetingsEdit-input-field"
            v-model="description"
          />
        </div>
        <div class="meetingsEdit-input">
          <label class="meetingsEdit-label">Date:</label>
          <input
            @keyup.enter.prevent="saveChanges"
            class="meetingsEdit-input-field"
            v-model="date"
          />
        </div>
        <div class="meetingsEdit-flex">
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

        <button @click="closeEditModal" id="meetingsEdit-close-btn">
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
  name: "meetingsEditModal",
  props: {
    //receiving selectedInfo as props
    selectedInfo: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const description = ref(props.selectedInfo.description); //declaring variables from selectedInfo
    const date = ref(props.selectedInfo.date);

    const dateTime = ref(new Date());
    const dateOptions = { month: "short", day: "2-digit", year: "numeric" }; //changing the date form to custom form
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

    const newDate = ref(dateTime.value.toLocaleString("en-US", dateOptions));
    const time = ref(dateTime.value.toLocaleString("en-US", timeOptions));
    const dateTimeData = ref(newDate.value + " " + time.value);

    const saveChanges = async () => {
      const documentRef = doc(db, "MeetingsInfo", props.selectedInfo.id);
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

    return { saveChanges, description, date, dateTime };
  },
  methods: {
    closeEditModal() {
      this.$emit("closeEditModal");
    },
  },
});
</script>
<style scoped>
.meetingsEditModal {
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
.meetingsEdit-header {
  font-size: 20px;
  text-decoration: none;
  color: #424954;
  white-space: nowrap;
  margin-top: 15px;
  margin-bottom: 0px;
}
.meetingsEdit-underline {
  border: 0;
  clear: both;
  display: block;
  width: 50%;
  background-color: #4f4f4fc4;
  height: 1px;
  margin-left: 0;
  margin-bottom: 15px;
}
.meetingsEdit-container {
  display: flex;
  flex-direction: column;
  color: #424954;
  margin-left: 15px;
  padding-bottom: 15px;
}
.meetingsEdit-modal-container {
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
.meetingsEdit-input {
  margin-bottom: 7px;
}

.form-group {
  margin-bottom: 1rem;
}
.meetingsEdit-input-field {
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
.edit-submit-btn:active {
  background-color: rgb(0, 88, 113);
  box-shadow: inset 0px 0px 5px #888;
}
#meetingsEdit-close-btn {
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
#meetingsEdit-close-btn:hover,
#meetingsEdit-close-btn:active {
  color: rgb(249, 112, 112);
}

.meetingsEdit-label {
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
.meetingsEdit-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
