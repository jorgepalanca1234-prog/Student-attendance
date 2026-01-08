let records = [];
let currentUser = null;

function login() {
  let name = document.getElementById("loginName").value;
  let section = document.getElementById("loginSection").value;

  if (name === "" || section === "") {
    alert("Please enter name and section");
    return;
  }

  currentUser = {
    name: name,
    section: section,
    timeIn: "",
    timeOut: ""
  };

  records.push(currentUser);

  document.getElementById("loginDiv").style.display = "none";
  document.getElementById("attendanceDiv").style.display = "block";
  document.getElementById("welcome").innerText =
    "Welcome, " + name + " (" + section + ")";

  updateTable();
}

function timeIn() {
  if (currentUser.timeIn !== "") {
    alert("Already timed in");
    return;
  }

  currentUser.timeIn = new Date().toLocaleTimeString();
  updateTable();
}

function timeOut() {
  if (currentUser.timeIn === "") {
    alert("Please time in first");
    return;
  }

  currentUser.timeOut = new Date().toLocaleTimeString();
  updateTable();
}

function logout() {
  currentUser = null;
  document.getElementById("loginDiv").style.display = "block";
  document.getElementById("attendanceDiv").style.display = "none";
}

function updateTable() {
  let table = document.getElementById("recordsTable");
  table.innerHTML = "";

  records.forEach(r => {
    table.innerHTML += `
      <tr>
        <td>${r.name}</td>
        <td>${r.section}</td>
        <td>${r.timeIn || "-"}</td>
        <td>${r.timeOut || "-"}</td>
      </tr>
    `;
  });
}
