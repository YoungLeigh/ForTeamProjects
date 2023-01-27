<template>
  <section class="team-info">
    <div class="team-info-content">
      <div class="team-info-title">
        <p class="title">Team Info</p>
        <button type="button" id="main-btn" class="btn btn--full btn--outline">
          Edit
        </button>
        <button type="button" id="main-btn" class="btn btn--full btn--outline">
          Save
        </button>
      </div>

      <table class="team-info-table">
        <tr>
          <th>Name</th>

          <th>Email</th>

          <th>Contact</th>

          <th></th>
        </tr>

        <tr>
          <td>1368</td>

          <td>18 Nov 1962</td>

          <td>5000$</td>

          <td class="td-btn">
            <button type="button" class="team-close-btn btn--full2 edit-btn">
              <font-awesome-icon
                icon="fa-solid fa-pen-to-square"
                class="team-icon"
              />
            </button>

            <button type="button" class="team-close-btn btn--full2">
              <font-awesome-icon icon="fa-solid fa-trash" class="team-icon1" />
            </button>
          </td>
        </tr>
      </table>

      <button class="team-add-btn btn--full1 btn--outline1" type="button">
        +Add Member
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.team-info {
  background-color: #a6deae;
  margin-top: 15px;
  border-radius: 35px;
  color: #424954;
  display: inline-block;
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
  width: 710px;
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
}
td {
  padding: 0px 15px;
  text-align: left;
}
th {
  padding: 10px 15px;
  text-align: left;
}
th {
  background-color: #f3f3f3;
  color: #424954;
  text-transform: uppercase;
  font-family: mainFont;
  font-size: 13px;
}
tr {
  width: 100%;
  background-color: #fafafa;
}
td {
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
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
</style>
