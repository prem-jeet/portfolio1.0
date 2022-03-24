const play_pause_button = document.querySelector("[play-pause-button]");
const featured_project_carousel = document.querySelector(
  "#featured_project_carousel"
);
let carousel = new bootstrap.Carousel(featured_project_carousel);



play_pause_button.addEventListener("click", (e) => {
  let state = e.target.getAttribute("data-state");

  if (state === "play") {
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    e.target.setAttribute("data-state", "pause");
    carousel.pause()
    
    
  } else {
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    e.target.setAttribute("data-state", "play");
    carousel.cycle()
  }
});

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
