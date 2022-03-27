(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

const call_check_box = document.querySelector("#call_option");
call_check_box.addEventListener("change", () => {
  let checked = call_check_box.checked;
  const mobile_container = document.querySelector("#mobile_container");

  // make the input for mobile number visible
  // make hide the input for  mobile number
  mobile_container.classList.toggle("d-none", !checked);
  mobile_container
    .querySelector("#mobile")
    .toggleAttribute("required", checked);
});

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
  github_button.setAttribute("href", data.github);
  live_button.setAttribute("href", data.live);
  project_description.innerHTML = data.description;
  for (tag of data.tags) {
    let span = document.createElement("span");
    span.textContent = tag;
    project_tags.appendChild(span);
  }
  return new_card;
}

},{"./projects.json":2}],2:[function(require,module,exports){
module.exports={
  "project1": {
    "img": "img/projects/project1.jpg",
    "name": "Landing page",
    "description": "Converted the design from <a target='_blank' href='https://www.uidesigndaily.com/posts/sketch-landing-page-website-day-1217'><i>UI Design Daily</i></a> to code",
    "tags": ["html", "css", "flxbox", "non-responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/7_landing_page/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/7_landing_page"
  },
  "project2": {
    "img": "img/projects/project2.jpg",
    "name": "Sidebar navigation",
    "description": "Recreated the sidebar menu from <a target='_blank' href='https://1337x.to/home/'><i>1337x Website</i></a>",
    "tags": ["html", "css", "flexbox"],
    "live": "https://prem-jeet.github.io/web-dev-practice/8_1337x-sidebar-layout/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/8_1337x-sidebar-layout"
  },
  "project3":{
    "img": "img/projects/project3.jpg",
    "name": "Event list",
    "description": "Converted design to code taking inspiration from <a target='_blank' href='https://www.uidesigndaily.com/posts/sketch-events-list-day-1263'><i>UI Design Daily</i></a>",
    "tags": ["html", "css", "flexbox", "not-responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/3_events_list/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/3_events_list"
  },
  "project4":{
    "img": "img/projects/project4.jpg",
    "name": "Event Grid",
    "description": "Converted design to code taking inspiration from <a target='_blank' href='https://www.uidesigndaily.com/posts/sketch-events-list-day-1346'><i>UI Design Daily</i></a>",
    "tags": ["html", "css", "flexbox", "responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/4_events_list_2/",
    "github": "https://github.com/prem-jeet/web-dev-practice/blob/gh-pages/4_events_list_2/style.css"
  },
  "project5":{
    "img": "img/projects/project5.jpg",
    "name": "Stats Card",
    "description": "Converted design to code taking inspiration from <a target='_blank' href='https://www.uidesigndaily.com/posts/sketch-stats-statistics-gradient-card-day-1301'><i>UI Design Daily</i></a>",
    "tags": ["html", "css", "flexbox", "not-responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/6_stats_card/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/6_stats_card"
  },
  "project6":{
    "img": "img/projects/project6.jpg",
    "name": "Feedback Page",
    "description": "Converted design to code taking inspiration from <a target='_blank' href='https://www.uidesigndaily.com/posts/figma-feedback-card-ui-design-day-1335'><i>UI Design Daily</i></a>",
    "tags": ["html", "css", "flexbox", "responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/5_feedback_Card/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/5_feedback_Card"
    
  },
  "project7":{
    "img": "img/projects/project7.jpg",
    "name": "Pricing Card",
    "description": "Made this as a part of <a target='_blank' href='https://www.udemy.com/course/the-web-developer-bootcamp/1335'><i>Colt Steele: The Web Developer Bootcamp</i></a>",
    "tags": ["html", "css", "flexbox", "responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/9_PriceTable(colt_steele_bootcamp)/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/9_PriceTable(colt_steele_bootcamp)"
    
  },
  "project8":{
    "img": "img/projects/project8.jpg",
    "name": "3-Column Preview Card",
    "description": "Converted design to code taking inspiration from <a target='_blank' href='https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-'><i>Frontend Mentor Challange</i></a>",
    "tags": ["html", "css", "flexbox", "responsive"],
    "live": "https://prem-jeet.github.io/web-dev-practice/11_3column_previw_card/",
    "github": "https://github.com/prem-jeet/web-dev-practice/tree/gh-pages/11_3column_previw_card"
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInByb2plY3RzLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgcGxheV9wYXVzZV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3BsYXktcGF1c2UtYnV0dG9uXVwiKTtcbmNvbnN0IGZlYXR1cmVkX3Byb2plY3RfY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNmZWF0dXJlZF9wcm9qZWN0X2Nhcm91c2VsXCJcbik7XG5sZXQgY2Fyb3VzZWwgPSBuZXcgYm9vdHN0cmFwLkNhcm91c2VsKGZlYXR1cmVkX3Byb2plY3RfY2Fyb3VzZWwpO1xuXG5wbGF5X3BhdXNlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgbGV0IHN0YXRlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcblxuICBpZiAoc3RhdGUgPT09IFwicGxheVwiKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImZhLXBsYXlcIik7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImZhLXBhdXNlXCIpO1xuICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJwYXVzZVwiKTtcbiAgICBjYXJvdXNlbC5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1wYXVzZVwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmEtcGxheVwiKTtcbiAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwicGxheVwiKTtcbiAgICBjYXJvdXNlbC5jeWNsZSgpO1xuICB9XG59KTtcblxuY29uc3QgY2FsbF9jaGVja19ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbGxfb3B0aW9uXCIpO1xuY2FsbF9jaGVja19ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGxldCBjaGVja2VkID0gY2FsbF9jaGVja19ib3guY2hlY2tlZDtcbiAgY29uc3QgbW9iaWxlX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlX2NvbnRhaW5lclwiKTtcblxuICAvLyBtYWtlIHRoZSBpbnB1dCBmb3IgbW9iaWxlIG51bWJlciB2aXNpYmxlXG4gIC8vIG1ha2UgaGlkZSB0aGUgaW5wdXQgZm9yICBtb2JpbGUgbnVtYmVyXG4gIG1vYmlsZV9jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImQtbm9uZVwiLCAhY2hlY2tlZCk7XG4gIG1vYmlsZV9jb250YWluZXJcbiAgICAucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVcIilcbiAgICAudG9nZ2xlQXR0cmlidXRlKFwicmVxdWlyZWRcIiwgY2hlY2tlZCk7XG59KTtcblxuLy8gKiBzd2lwZXIganMgY29uZmlnXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgZWZmZWN0OiBcImNvdmVyZmxvd1wiLFxuICBncmFiQ3Vyc29yOiB0cnVlLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgIHJvdGF0ZTogNTAsXG4gICAgc3RyZXRjaDogMCxcbiAgICBkZXB0aDogMTAwLFxuICAgIG1vZGlmaWVyOiAxLFxuICAgIHNsaWRlU2hhZG93czogZmFsc2UsXG4gIH0sXG59KTtcblxuLy8gKiBtb2R1bGFyaXplIHRoZSBhbGwgcHJvamVjdCBjYXJkcyB1c2luZyB0ZW1wbGF0ZSBhbmQganNvbnMgZmlsZVxuXG5jb25zdCBwcm9qZWN0X2NhcmRfdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RfY2FyZF90ZW1wbGF0ZVwiKTtcbmNvbnN0IHN3aXBlcl93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItd3JhcHBlclwiKTtcbmNvbnN0IHByb2plY3RzID0gcmVxdWlyZShcIi4vcHJvamVjdHMuanNvblwiKTtcblxuZm9yIChwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gIGxldCBuZXdfY2FyZCA9IG1ha2VDYXJkKHByb2plY3RzW3Byb2plY3RdKTtcblxuICBzd2lwZXJfd3JhcHBlci5hcHBlbmRDaGlsZChuZXdfY2FyZCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkKGRhdGEpIHtcbiAgbGV0IG5ld19jYXJkID0gcHJvamVjdF9jYXJkX3RlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmNoaWxkcmVuWzBdO1xuXG4gIGxldCBwcm9qZWN0X2ltZyA9IG5ld19jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9faW1nXCIpO1xuICBsZXQgcHJvamVjdF90aXRsZSA9IG5ld19jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9fdGl0bGVcIik7XG4gIGxldCBnaXRodWJfYnV0dG9uID0gbmV3X2NhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X19idXR0b25bZ2l0aHViXVwiKTtcbiAgbGV0IGxpdmVfYnV0dG9uID0gbmV3X2NhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X19idXR0b25bbGl2ZV1cIik7XG4gIGxldCBwcm9qZWN0X2Rlc2NyaXB0aW9uID0gbmV3X2NhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X19kZXNjcmlwdGlvblwiKTtcbiAgbGV0IHByb2plY3RfdGFncyA9IG5ld19jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9fdGFnc1wiKTtcblxuICBwcm9qZWN0X2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWA7XG4gIHByb2plY3RfdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIGdpdGh1Yl9idXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkYXRhLmdpdGh1Yik7XG4gIGxpdmVfYnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZGF0YS5saXZlKTtcbiAgcHJvamVjdF9kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICBmb3IgKHRhZyBvZiBkYXRhLnRhZ3MpIHtcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0YWc7XG4gICAgcHJvamVjdF90YWdzLmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG4gIHJldHVybiBuZXdfY2FyZDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJwcm9qZWN0MVwiOiB7XG4gICAgXCJpbWdcIjogXCJpbWcvcHJvamVjdHMvcHJvamVjdDEuanBnXCIsXG4gICAgXCJuYW1lXCI6IFwiTGFuZGluZyBwYWdlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbnZlcnRlZCB0aGUgZGVzaWduIGZyb20gPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vd3d3LnVpZGVzaWduZGFpbHkuY29tL3Bvc3RzL3NrZXRjaC1sYW5kaW5nLXBhZ2Utd2Vic2l0ZS1kYXktMTIxNyc+PGk+VUkgRGVzaWduIERhaWx5PC9pPjwvYT4gdG8gY29kZVwiLFxuICAgIFwidGFnc1wiOiBbXCJodG1sXCIsIFwiY3NzXCIsIFwiZmx4Ym94XCIsIFwibm9uLXJlc3BvbnNpdmVcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvN19sYW5kaW5nX3BhZ2UvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvdHJlZS9naC1wYWdlcy83X2xhbmRpbmdfcGFnZVwiXG4gIH0sXG4gIFwicHJvamVjdDJcIjoge1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3QyLmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIlNpZGViYXIgbmF2aWdhdGlvblwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZWNyZWF0ZWQgdGhlIHNpZGViYXIgbWVudSBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovLzEzMzd4LnRvL2hvbWUvJz48aT4xMzM3eCBXZWJzaXRlPC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvOF8xMzM3eC1zaWRlYmFyLWxheW91dC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzhfMTMzN3gtc2lkZWJhci1sYXlvdXRcIlxuICB9LFxuICBcInByb2plY3QzXCI6e1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3QzLmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIkV2ZW50IGxpc3RcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy51aWRlc2lnbmRhaWx5LmNvbS9wb3N0cy9za2V0Y2gtZXZlbnRzLWxpc3QtZGF5LTEyNjMnPjxpPlVJIERlc2lnbiBEYWlseTwvaT48L2E+XCIsXG4gICAgXCJ0YWdzXCI6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJmbGV4Ym94XCIsIFwibm90LXJlc3BvbnNpdmVcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvM19ldmVudHNfbGlzdC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzNfZXZlbnRzX2xpc3RcIlxuICB9LFxuICBcInByb2plY3Q0XCI6e1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3Q0LmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIkV2ZW50IEdyaWRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy51aWRlc2lnbmRhaWx5LmNvbS9wb3N0cy9za2V0Y2gtZXZlbnRzLWxpc3QtZGF5LTEzNDYnPjxpPlVJIERlc2lnbiBEYWlseTwvaT48L2E+XCIsXG4gICAgXCJ0YWdzXCI6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJmbGV4Ym94XCIsIFwicmVzcG9uc2l2ZVwiXSxcbiAgICBcImxpdmVcIjogXCJodHRwczovL3ByZW0tamVldC5naXRodWIuaW8vd2ViLWRldi1wcmFjdGljZS80X2V2ZW50c19saXN0XzIvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvYmxvYi9naC1wYWdlcy80X2V2ZW50c19saXN0XzIvc3R5bGUuY3NzXCJcbiAgfSxcbiAgXCJwcm9qZWN0NVwiOntcbiAgICBcImltZ1wiOiBcImltZy9wcm9qZWN0cy9wcm9qZWN0NS5qcGdcIixcbiAgICBcIm5hbWVcIjogXCJTdGF0cyBDYXJkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbnZlcnRlZCBkZXNpZ24gdG8gY29kZSB0YWtpbmcgaW5zcGlyYXRpb24gZnJvbSA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly93d3cudWlkZXNpZ25kYWlseS5jb20vcG9zdHMvc2tldGNoLXN0YXRzLXN0YXRpc3RpY3MtZ3JhZGllbnQtY2FyZC1kYXktMTMwMSc+PGk+VUkgRGVzaWduIERhaWx5PC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIiwgXCJub3QtcmVzcG9uc2l2ZVwiXSxcbiAgICBcImxpdmVcIjogXCJodHRwczovL3ByZW0tamVldC5naXRodWIuaW8vd2ViLWRldi1wcmFjdGljZS82X3N0YXRzX2NhcmQvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvdHJlZS9naC1wYWdlcy82X3N0YXRzX2NhcmRcIlxuICB9LFxuICBcInByb2plY3Q2XCI6e1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3Q2LmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIkZlZWRiYWNrIFBhZ2VcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy51aWRlc2lnbmRhaWx5LmNvbS9wb3N0cy9maWdtYS1mZWVkYmFjay1jYXJkLXVpLWRlc2lnbi1kYXktMTMzNSc+PGk+VUkgRGVzaWduIERhaWx5PC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIiwgXCJyZXNwb25zaXZlXCJdLFxuICAgIFwibGl2ZVwiOiBcImh0dHBzOi8vcHJlbS1qZWV0LmdpdGh1Yi5pby93ZWItZGV2LXByYWN0aWNlLzVfZmVlZGJhY2tfQ2FyZC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzVfZmVlZGJhY2tfQ2FyZFwiXG4gICAgXG4gIH0sXG4gIFwicHJvamVjdDdcIjp7XG4gICAgXCJpbWdcIjogXCJpbWcvcHJvamVjdHMvcHJvamVjdDcuanBnXCIsXG4gICAgXCJuYW1lXCI6IFwiUHJpY2luZyBDYXJkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZGUgdGhpcyBhcyBhIHBhcnQgb2YgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vd3d3LnVkZW15LmNvbS9jb3Vyc2UvdGhlLXdlYi1kZXZlbG9wZXItYm9vdGNhbXAvMTMzNSc+PGk+Q29sdCBTdGVlbGU6IFRoZSBXZWIgRGV2ZWxvcGVyIEJvb3RjYW1wPC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIiwgXCJyZXNwb25zaXZlXCJdLFxuICAgIFwibGl2ZVwiOiBcImh0dHBzOi8vcHJlbS1qZWV0LmdpdGh1Yi5pby93ZWItZGV2LXByYWN0aWNlLzlfUHJpY2VUYWJsZShjb2x0X3N0ZWVsZV9ib290Y2FtcCkvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvdHJlZS9naC1wYWdlcy85X1ByaWNlVGFibGUoY29sdF9zdGVlbGVfYm9vdGNhbXApXCJcbiAgICBcbiAgfSxcbiAgXCJwcm9qZWN0OFwiOntcbiAgICBcImltZ1wiOiBcImltZy9wcm9qZWN0cy9wcm9qZWN0OC5qcGdcIixcbiAgICBcIm5hbWVcIjogXCIzLUNvbHVtbiBQcmV2aWV3IENhcmRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy5mcm9udGVuZG1lbnRvci5pby9jaGFsbGVuZ2VzLzNjb2x1bW4tcHJldmlldy1jYXJkLWNvbXBvbmVudC1wSDkyZUFSMi0nPjxpPkZyb250ZW5kIE1lbnRvciBDaGFsbGFuZ2U8L2k+PC9hPlwiLFxuICAgIFwidGFnc1wiOiBbXCJodG1sXCIsIFwiY3NzXCIsIFwiZmxleGJveFwiLCBcInJlc3BvbnNpdmVcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvMTFfM2NvbHVtbl9wcmV2aXdfY2FyZC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzExXzNjb2x1bW5fcHJldml3X2NhcmRcIlxuICB9XG59XG4iXX0=
