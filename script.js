const roster = document.getElementById('roster-table');
const hiring = document.getElementById('hiring-table');

let open = false;
let employees = [];
let names = ['Ashley', 'Courtney', 'Johnson', 'Strong', 'Lance', 'Harper'];

// TODO: Make the top bar variables and continue working on making the employee loading system easier to manage.

// displaying employee information
function displayInformation() {
  roster.innerHTML = "";
  hiring.innerHTML = "";
  for(employee in employees) {
    roster.innerHTML += `<tr><td style="display: flex; flex-direction: row;"><p>${employees[employee].toString()}</p><button id="fire" type="button" onclick="fireEmployee('${employees[employee].toString()}')">Fire</button></td></tr>`;
  }
  for(name in names) {
    hiring.innerHTML += `<tr><td style="display: flex; flex-direction: row;"><p>${names[name].toString()}</p><button id="hire" type="button" onclick="hireEmployee('${names[name].toString()}')">Hire</button></td></tr>`
  }
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
  displayInformation();
}

// Firing employees
function fireEmployee(name) {
  // Scroll through the employees array
  for(employee in employees) {
    // Check if the name exists in the array
    if(employees[employee].toString === name) {
      // Add the name to the names array
      names.push(name);
      // Remove the name from the employees array
      employees.splice(name, 1);
    }
  }
  displayInformation();
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
  displayInformation();
}
