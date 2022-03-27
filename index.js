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
    carousel.pause();
  } else {
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    e.target.setAttribute("data-state", "play");
    carousel.cycle();
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

// * swiper js config
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

// * modularize the all project cards using template and jsons file

const project_card_template = document.querySelector("#project_card_template");
const swiper_wrapper = document.querySelector(".swiper-wrapper");
const projects = require("./projects.json");

for (project in projects) {
  let new_card = makeCard(projects[project]);

  swiper_wrapper.appendChild(new_card);
}

function makeCard(data) {
  let new_card = project_card_template.content.cloneNode(true).children[0];

  let project_img = new_card.querySelector(".project__img");
  let project_title = new_card.querySelector(".project__title");
  let github_button = new_card.querySelector(".project__button[github]");
  let live_button = new_card.querySelector(".project__button[live]");
  let project_description = new_card.querySelector(".project__description");
  let project_tags = new_card.querySelector(".project__tags");

  project_img.style.backgroundImage = `url(${data.img})`;
  project_title.textContent = data.name;
  github_button.setAttribute("href", data.github)
  live_button.setAttribute("href", data.live)
  project_description.innerHTML = data.description;
  for (tag of data.tags) {
    let span = document.createElement("span");
    span.textContent = tag;
    project_tags.appendChild(span);
  }
  return new_card;
}
