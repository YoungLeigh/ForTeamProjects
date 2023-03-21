<template>
  <div class="MeetingsAddModal">
    <table class="MeetingsAddModal-table">
      <thead>
        <th class="table-description team-add-th">+ Add a Meeting</th>

        <th class="table-date team-add-th"></th>

        <th class="table-actions team-add-th"></th>
      </thead>
      <tbody>
        <tr class="team-info-tr">
          <td class="table-description meetings-info-td">
            <input
              @keyup.enter.prevent="addNewMeeting"
              @keyup.escape.prevent="closeAddBtn"
              class="team-add-input"
              type="text"
              name="newName"
              placeholder="Meetings Info"
              v-model="meetingsDescription"
            />
          </td>

          <td class="table-date meetings-info-td">
            <div class="table-date-row">
              <div class="meetings-add-date">{{ dateTimeData }}</div>
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
            </div>
          </td>

          <td class="td-btn table-actions meetings-info-td">
            <button
              @click="addNewMeeting"
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
import { ref, watch } from "vue";
// import { useStore } from "vuex";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  name: "MeetingsAddModal",
  emit: ["closeAddBtn"],
  setup(props, context) {
    const dateTime = ref(new Date());

    const dateOptions = { month: "short", day: "2-digit", year: "numeric" }; //changing the date form to custom form
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

    const date = ref(dateTime.value.toLocaleString("en-US", dateOptions));
    const time = ref(dateTime.value.toLocaleString("en-US", timeOptions));
    const dateTimeData = ref(date.value + " " + time.value);
    // const date = ref(new Date());
    const meetingsDescription = ref("");
    const meetingsDate = ref("");

    // const store = useStore();
    const closeAddBtn = () => {
      context.emit("closeAddBtn");
    };

    const addNewMeeting = async () => {
      await addDoc(collection(db, "MeetingsInfo"), {
        description: meetingsDescription.value,
        date: dateTimeData.value,
        timestamp: serverTimestamp(), // add timestamp field
      });
      meetingsDescription.value = "";
      meetingsDate.value = "";
    };

    watch(dateTime, (newValue) => {
      //watching the changes in data (selecting the date in calendar) and applying change
      date.value = newValue.toLocaleString("en-US", dateOptions);
      time.value = newValue.toLocaleString("en-US", timeOptions);
      dateTimeData.value = date.value + " " + time.value;
    });

    return {
      date,
      dateTime,
      dateTimeData,
      time,
      meetingsDescription,
      meetingsDate,
      closeAddBtn,
      addNewMeeting,
    };
  },
};
</script>

<style scoped>
.MeetingsAddModal {
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
.MeetingsAddModal-table {
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
.td-btn {
  display: flex;
  flex-direction: row;
  background-color: #a6deae;
  height: 100%;
  align-items: center;
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
.team-icon5 {
  width: 18px;
  color: #424954;
}
.team-icon5:hover,
.team-icon5:active {
  color: rgb(255, 255, 255);
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
.table-date-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.team-info-tr {
  width: 100%;
}
.table-description {
  width: 60%;
}
.table-date {
  width: 30%;
}
.table-actions {
  width: 10%;
}
.meetings-add-date {
  width: 90%;
  background: none;
  border: none;
  font-family: mainFont;
  font-size: 15px;
  color: #424954;
}
</style>
