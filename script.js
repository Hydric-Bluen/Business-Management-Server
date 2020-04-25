let open = false;

function displayWindow(value) {
  switch(open) {
    case true:
      document.getElementById(`${value}`).style.display = 'none';
      open = false;
    break;
    case false:
    break;
  }
}
