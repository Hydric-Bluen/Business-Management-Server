const roster = document.getElementById('roster-table');
const hiring = document.getElementById('hiring-table');

let open = false;
let employees = [];
let names = ['Ashley', 'Courtney', 'Johnson', 'Strong', 'Lance', 'Harper'];

// TODO: Make the top bar variables and continue working on making the employee loading system easier to manage.

// Parse Employee Information and draw it to the screen
function parseEmployeeInformation() {
  for(employee in employees) {
    roster.innerHTML += `<tr><td><p>${employees[employee].toString()}</p></td></tr>`;
  }
  return;
}

// parse the hire information and draw it to the screen
function parseHireInformation() {
  for(name in names) {
    hiring.innerHTML += `<tr><td style="display: flex; flex-direction: row;"><p>${names[name].toString()}</p><button id="hire" type="button" onclick="hireEmployee('${names[name].toString()}')">hire</button></td></tr>`
  }
  return;
}

// Clear the information panels before drawing to them again
function purgeInformation() {
  hiring.innerHTML = "";
  roster.innerHTML = "";
  return;
}

// Hiring employees
function hireEmployee(name) {
  // Scroll through the names array
  for(n in names) {
    // Check if the name is in the array
    if(names[n].toString() === name) {
      // Add the name to the employee array
      employees.push(name);
      // Remove the name from the names array
      names.splice(name, 1);
      break;
    }
  }
  purgeInformation();
  parseEmployeeInformation();
  parseHireInformation();
}

// Open and close the different windows in the area.
function displayWindow(value) {
  if(open === false) {
    document.getElementById(`${value}`).style.display = "inline-flex";
    open = true;
    return;
  } else {
    document.getElementById(`${value}`).style.display = "none";
    open = false;
    return;
  }
}

window.onload = function() {
  parseEmployeeInformation();
  parseHireInformation();
}
