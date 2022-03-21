function checked_status(e) {
  let checked = e.checked;
  const mobile_container = document.querySelector("#mobile_container");

  // make the input for mobile number visible
  // make hide the input for  mobile number
  mobile_container.classList.toggle("d-none", !checked);
  mobile_container
    .querySelector("#mobile")
    .toggleAttribute("required", checked);
}


