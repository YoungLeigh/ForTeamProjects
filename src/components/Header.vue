<template>
  <div class="header">
    <a href="#" class="logo">Team Project</a>
    <div class="header-btn-list">
      <button class="btn1 btn--full btn--outline" type="button">
        Settings
      </button>
      <button
        v-if="!user"
        @click="handleLogin"
        class="btn1 btn--full btn--outline"
        type="button"
      >
        Login
      </button>
      <div v-if="user" class="profile-container">
        <button
          @click="toggleProfile"
          class="btn1 btn--full btn--outline profile-btn"
        >
          <font-awesome-icon class="user-icon" icon="fa-solid fa-circle-user" />
        </button>
        <div v-if="profile" class="profile-modal">
          <div class="user-profile-container">
            <div @click="toggleProfileModal" class="profile-btns">
              <font-awesome-icon
                class="profile-icons"
                icon="fa-solid fa-user"
              />Profile
            </div>
            <div v-if="profileModal" class="user-profile-modal">
              <p class="profile-modal-header">Profile</p>
              <div class="profile-modal-container">
                <font-awesome-icon
                  class="user-icon-profile"
                  icon="fa-solid fa-circle-user"
                />
                <div class="user-email">{{ userEmail }}</div>
              </div>
              <p @click="deleteAccount" class="delete-account">
                Delete this account
              </p>
            </div>
          </div>

          <div class="profile-btns">
            <font-awesome-icon
              class="profile-icons"
              icon="fa-solid fa-file"
            />Projects
          </div>
          <div class="profile-btns">
            <font-awesome-icon
              class="profile-icons share-icon"
              icon="fa-solid fa-share"
            />
            Share Link
          </div>
          <div @click="handleLogOut" class="profile-btns">
            <font-awesome-icon
              class="profile-icons"
              icon="fa-solid fa-right-from-bracket"
            />Sign Out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import { computed } from "vue";

export default {
  setup() {
    const profile = ref(false);
    const profileModal = ref(false);

    const store = useStore();
    const router = useRouter();

    const toggleProfile = () => {
      profile.value = !profile.value;
      if (profileModal.value === true) {
        profileModal.value = !profileModal.value;
      }
    };
    const toggleProfileModal = () => {
      profileModal.value = !profileModal.value;
    };
    const handleLogin = () => {
      router.push("login");
    };
    const handleLogOut = () => {
      store.dispatch("logout");
    };
    const deleteAccount = () => {
      store.dispatch("deleteProfile");
      router.push("/signup");
      window.location.reload(); //make sure to reload the page
    };

    return {
      profile,
      profileModal,
      user: computed(() => store.state.user),
      userEmail: computed(() => store.state.user.email),
      toggleProfileModal,
      toggleProfile,
      handleLogin,
      handleLogOut,
      deleteAccount,
    };
  },
};
</script>

<style>
.header {
  background-color: #e8f3e1;
  height: 55px;
  display: flex;
  color: white;
  align-items: center;
  gap: 10px;
  max-width: 750px;
  margin: auto;
  justify-content: space-between;
  margin-top: 10px;
}
.logo {
  font-family: titleFont;
  font-size: 35px;
  text-decoration: none;
  color: #424954;
  width: 250px;
  white-space: nowrap;
}
.header-btn-list {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.btn1 {
  background-color: #424954;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.btn1,
.btn:link,
.btn:visited {
  width: 75px;
  height: 35px;
  display: flex;
  text-decoration: none;
  font-size: 15px;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  padding: 11px;
  font-family: mainFont;
  color: #fff;
}

.btn--full:link,
.btn--full:visited {
  background-color: rgb(255, 255, 255);
  color: #424954;
}
.btn--full:hover,
.btn--full:active {
  background-color: white;
}
.btn--outline:hover,
.btn--outline:active {
  background-color: #00cc99;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.user-icon {
  height: 25px;
}
.profile-container {
  position: relative;
}
.profile-modal {
  position: absolute;
  width: 150px;
  right: 0;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: #424954;
  align-items: left;
  font-size: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.profile-btns {
  align-items: center;
  padding: 15px 0;
  padding-left: 10px;
  cursor: pointer;
}
.profile-icons {
  margin-right: 5px;
  width: 15px;
}
.profile-btns:hover,
.profile-btns:active {
  border: 2px solid #59606bfb;
}
.share-icon {
  margin-right: 0;
}
.user-profile-modal {
  position: absolute;
  width: 360px;
  right: 155px;
  top: 0;
  /* top: 33%; */
  /* left: 50%;
  transform: translateX(-50%); */
  background-color: white;
  /* margin-top: 10px; */
  border-radius: 10px;
  display: inline-block;
  color: #424954;
  align-items: left;
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: auto;
}
.profile-modal-header {
  font-size: 20px;
  margin: 0;
  margin: 10px 10px 0 10px;
  border-bottom: 1.5px solid #96999e;
}
.profile-modal-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-icon-profile {
  height: 40px;
  margin: 10px 0;
  margin-left: 10px;
}
.user-email {
  margin-left: 10px;
}
.delete-account {
  margin-left: 10px;
  margin-top: 5px;
  text-decoration: underline;
  cursor: pointer;
  color: rgb(238, 77, 77);
  display: inline-block;
}
.user-profile-container {
  position: relative;
}
</style>
