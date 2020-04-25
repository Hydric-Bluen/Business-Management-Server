const table = document.getElementById('employee-table');

let open = false;
let employees = [];

// TODO: Make the top bar variables and continue working on making the employee loading system easier to manage.

// Parse Employee Information
function parseEmployeeInformation() {
  for(employee in employees) {
    table.innerHTML += `<tr><td><p>${employees[employee].toString()}</p></td></tr>`;
  }
}

// Open and close the different windows in the area.
function displayWindow(value) {
  switch(open) {
    case true:
      document.getElementById(`${value}`).style.display = 'none';
      open = false;
    break;
    case false:
      document.getElementById(`${value}`).style.display = 'inline-flex';
      open = true;
    break;
  }
}

window.onload = function() {
  parseEmployeeInformation();
}
