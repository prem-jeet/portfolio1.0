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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInByb2plY3RzLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHBsYXlfcGF1c2VfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltwbGF5LXBhdXNlLWJ1dHRvbl1cIik7XG5jb25zdCBmZWF0dXJlZF9wcm9qZWN0X2Nhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjZmVhdHVyZWRfcHJvamVjdF9jYXJvdXNlbFwiXG4pO1xubGV0IGNhcm91c2VsID0gbmV3IGJvb3RzdHJhcC5DYXJvdXNlbChmZWF0dXJlZF9wcm9qZWN0X2Nhcm91c2VsKTtcblxucGxheV9wYXVzZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGxldCBzdGF0ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG5cbiAgaWYgKHN0YXRlID09PSBcInBsYXlcIikge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1wbGF5XCIpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJmYS1wYXVzZVwiKTtcbiAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwicGF1c2VcIik7XG4gICAgY2Fyb3VzZWwucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcGF1c2VcIik7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImZhLXBsYXlcIik7XG4gICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcInBsYXlcIik7XG4gICAgY2Fyb3VzZWwuY3ljbGUoKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoZWNrZWRfc3RhdHVzKGUpIHtcbiAgbGV0IGNoZWNrZWQgPSBlLmNoZWNrZWQ7XG4gIGNvbnN0IG1vYmlsZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZV9jb250YWluZXJcIik7XG5cbiAgLy8gbWFrZSB0aGUgaW5wdXQgZm9yIG1vYmlsZSBudW1iZXIgdmlzaWJsZVxuICAvLyBtYWtlIGhpZGUgdGhlIGlucHV0IGZvciAgbW9iaWxlIG51bWJlclxuICBtb2JpbGVfY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIiwgIWNoZWNrZWQpO1xuICBtb2JpbGVfY29udGFpbmVyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlXCIpXG4gICAgLnRvZ2dsZUF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIGNoZWNrZWQpO1xufVxuXG4vLyAqIHN3aXBlciBqcyBjb25maWdcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1jb250YWluZXJcIiwge1xuICBlZmZlY3Q6IFwiY292ZXJmbG93XCIsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgcm90YXRlOiA1MCxcbiAgICBzdHJldGNoOiAwLFxuICAgIGRlcHRoOiAxMDAsXG4gICAgbW9kaWZpZXI6IDEsXG4gICAgc2xpZGVTaGFkb3dzOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG4vLyAqIG1vZHVsYXJpemUgdGhlIGFsbCBwcm9qZWN0IGNhcmRzIHVzaW5nIHRlbXBsYXRlIGFuZCBqc29ucyBmaWxlXG5cbmNvbnN0IHByb2plY3RfY2FyZF90ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdF9jYXJkX3RlbXBsYXRlXCIpO1xuY29uc3Qgc3dpcGVyX3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN3aXBlci13cmFwcGVyXCIpO1xuY29uc3QgcHJvamVjdHMgPSByZXF1aXJlKFwiLi9wcm9qZWN0cy5qc29uXCIpO1xuXG5mb3IgKHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgbGV0IG5ld19jYXJkID0gbWFrZUNhcmQocHJvamVjdHNbcHJvamVjdF0pO1xuXG4gIHN3aXBlcl93cmFwcGVyLmFwcGVuZENoaWxkKG5ld19jYXJkKTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmQoZGF0YSkge1xuICBsZXQgbmV3X2NhcmQgPSBwcm9qZWN0X2NhcmRfdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkuY2hpbGRyZW5bMF07XG5cbiAgbGV0IHByb2plY3RfaW1nID0gbmV3X2NhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X19pbWdcIik7XG4gIGxldCBwcm9qZWN0X3RpdGxlID0gbmV3X2NhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X190aXRsZVwiKTtcbiAgbGV0IGdpdGh1Yl9idXR0b24gPSBuZXdfY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfX2J1dHRvbltnaXRodWJdXCIpO1xuICBsZXQgbGl2ZV9idXR0b24gPSBuZXdfY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfX2J1dHRvbltsaXZlXVwiKTtcbiAgbGV0IHByb2plY3RfZGVzY3JpcHRpb24gPSBuZXdfY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfX2Rlc2NyaXB0aW9uXCIpO1xuICBsZXQgcHJvamVjdF90YWdzID0gbmV3X2NhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X190YWdzXCIpO1xuXG4gIHByb2plY3RfaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmltZ30pYDtcbiAgcHJvamVjdF90aXRsZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgZ2l0aHViX2J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRhdGEuZ2l0aHViKVxuICBsaXZlX2J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRhdGEubGl2ZSlcbiAgcHJvamVjdF9kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICBmb3IgKHRhZyBvZiBkYXRhLnRhZ3MpIHtcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0YWc7XG4gICAgcHJvamVjdF90YWdzLmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG4gIHJldHVybiBuZXdfY2FyZDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJwcm9qZWN0MVwiOiB7XG4gICAgXCJpbWdcIjogXCJpbWcvcHJvamVjdHMvcHJvamVjdDEuanBnXCIsXG4gICAgXCJuYW1lXCI6IFwiTGFuZGluZyBwYWdlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbnZlcnRlZCB0aGUgZGVzaWduIGZyb20gPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vd3d3LnVpZGVzaWduZGFpbHkuY29tL3Bvc3RzL3NrZXRjaC1sYW5kaW5nLXBhZ2Utd2Vic2l0ZS1kYXktMTIxNyc+PGk+VUkgRGVzaWduIERhaWx5PC9pPjwvYT4gdG8gY29kZVwiLFxuICAgIFwidGFnc1wiOiBbXCJodG1sXCIsIFwiY3NzXCIsIFwiZmx4Ym94XCIsIFwibm9uLXJlc3BvbnNpdmVcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvN19sYW5kaW5nX3BhZ2UvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvdHJlZS9naC1wYWdlcy83X2xhbmRpbmdfcGFnZVwiXG4gIH0sXG4gIFwicHJvamVjdDJcIjoge1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3QyLmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIlNpZGViYXIgbmF2aWdhdGlvblwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZWNyZWF0ZWQgdGhlIHNpZGViYXIgbWVudSBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovLzEzMzd4LnRvL2hvbWUvJz48aT4xMzM3eCBXZWJzaXRlPC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvOF8xMzM3eC1zaWRlYmFyLWxheW91dC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzhfMTMzN3gtc2lkZWJhci1sYXlvdXRcIlxuICB9LFxuICBcInByb2plY3QzXCI6e1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3QzLmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIkV2ZW50IGxpc3RcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy51aWRlc2lnbmRhaWx5LmNvbS9wb3N0cy9za2V0Y2gtZXZlbnRzLWxpc3QtZGF5LTEyNjMnPjxpPlVJIERlc2lnbiBEYWlseTwvaT48L2E+XCIsXG4gICAgXCJ0YWdzXCI6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJmbGV4Ym94XCIsIFwibm90LXJlc3BvbnNpdmVcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvM19ldmVudHNfbGlzdC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzNfZXZlbnRzX2xpc3RcIlxuICB9LFxuICBcInByb2plY3Q0XCI6e1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3Q0LmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIkV2ZW50IEdyaWRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy51aWRlc2lnbmRhaWx5LmNvbS9wb3N0cy9za2V0Y2gtZXZlbnRzLWxpc3QtZGF5LTEzNDYnPjxpPlVJIERlc2lnbiBEYWlseTwvaT48L2E+XCIsXG4gICAgXCJ0YWdzXCI6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJmbGV4Ym94XCIsIFwicmVzcG9uc2l2ZVwiXSxcbiAgICBcImxpdmVcIjogXCJodHRwczovL3ByZW0tamVldC5naXRodWIuaW8vd2ViLWRldi1wcmFjdGljZS80X2V2ZW50c19saXN0XzIvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvYmxvYi9naC1wYWdlcy80X2V2ZW50c19saXN0XzIvc3R5bGUuY3NzXCJcbiAgfSxcbiAgXCJwcm9qZWN0NVwiOntcbiAgICBcImltZ1wiOiBcImltZy9wcm9qZWN0cy9wcm9qZWN0NS5qcGdcIixcbiAgICBcIm5hbWVcIjogXCJTdGF0cyBDYXJkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbnZlcnRlZCBkZXNpZ24gdG8gY29kZSB0YWtpbmcgaW5zcGlyYXRpb24gZnJvbSA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly93d3cudWlkZXNpZ25kYWlseS5jb20vcG9zdHMvc2tldGNoLXN0YXRzLXN0YXRpc3RpY3MtZ3JhZGllbnQtY2FyZC1kYXktMTMwMSc+PGk+VUkgRGVzaWduIERhaWx5PC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIiwgXCJub3QtcmVzcG9uc2l2ZVwiXSxcbiAgICBcImxpdmVcIjogXCJodHRwczovL3ByZW0tamVldC5naXRodWIuaW8vd2ViLWRldi1wcmFjdGljZS82X3N0YXRzX2NhcmQvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvdHJlZS9naC1wYWdlcy82X3N0YXRzX2NhcmRcIlxuICB9LFxuICBcInByb2plY3Q2XCI6e1xuICAgIFwiaW1nXCI6IFwiaW1nL3Byb2plY3RzL3Byb2plY3Q2LmpwZ1wiLFxuICAgIFwibmFtZVwiOiBcIkZlZWRiYWNrIFBhZ2VcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy51aWRlc2lnbmRhaWx5LmNvbS9wb3N0cy9maWdtYS1mZWVkYmFjay1jYXJkLXVpLWRlc2lnbi1kYXktMTMzNSc+PGk+VUkgRGVzaWduIERhaWx5PC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIiwgXCJyZXNwb25zaXZlXCJdLFxuICAgIFwibGl2ZVwiOiBcImh0dHBzOi8vcHJlbS1qZWV0LmdpdGh1Yi5pby93ZWItZGV2LXByYWN0aWNlLzVfZmVlZGJhY2tfQ2FyZC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzVfZmVlZGJhY2tfQ2FyZFwiXG4gICAgXG4gIH0sXG4gIFwicHJvamVjdDdcIjp7XG4gICAgXCJpbWdcIjogXCJpbWcvcHJvamVjdHMvcHJvamVjdDcuanBnXCIsXG4gICAgXCJuYW1lXCI6IFwiUHJpY2luZyBDYXJkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZGUgdGhpcyBhcyBhIHBhcnQgb2YgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vd3d3LnVkZW15LmNvbS9jb3Vyc2UvdGhlLXdlYi1kZXZlbG9wZXItYm9vdGNhbXAvMTMzNSc+PGk+Q29sdCBTdGVlbGU6IFRoZSBXZWIgRGV2ZWxvcGVyIEJvb3RjYW1wPC9pPjwvYT5cIixcbiAgICBcInRhZ3NcIjogW1wiaHRtbFwiLCBcImNzc1wiLCBcImZsZXhib3hcIiwgXCJyZXNwb25zaXZlXCJdLFxuICAgIFwibGl2ZVwiOiBcImh0dHBzOi8vcHJlbS1qZWV0LmdpdGh1Yi5pby93ZWItZGV2LXByYWN0aWNlLzlfUHJpY2VUYWJsZShjb2x0X3N0ZWVsZV9ib290Y2FtcCkvXCIsXG4gICAgXCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJlbS1qZWV0L3dlYi1kZXYtcHJhY3RpY2UvdHJlZS9naC1wYWdlcy85X1ByaWNlVGFibGUoY29sdF9zdGVlbGVfYm9vdGNhbXApXCJcbiAgICBcbiAgfSxcbiAgXCJwcm9qZWN0OFwiOntcbiAgICBcImltZ1wiOiBcImltZy9wcm9qZWN0cy9wcm9qZWN0OC5qcGdcIixcbiAgICBcIm5hbWVcIjogXCIzLUNvbHVtbiBQcmV2aWV3IENhcmRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udmVydGVkIGRlc2lnbiB0byBjb2RlIHRha2luZyBpbnNwaXJhdGlvbiBmcm9tIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy5mcm9udGVuZG1lbnRvci5pby9jaGFsbGVuZ2VzLzNjb2x1bW4tcHJldmlldy1jYXJkLWNvbXBvbmVudC1wSDkyZUFSMi0nPjxpPkZyb250ZW5kIE1lbnRvciBDaGFsbGFuZ2U8L2k+PC9hPlwiLFxuICAgIFwidGFnc1wiOiBbXCJodG1sXCIsIFwiY3NzXCIsIFwiZmxleGJveFwiLCBcInJlc3BvbnNpdmVcIl0sXG4gICAgXCJsaXZlXCI6IFwiaHR0cHM6Ly9wcmVtLWplZXQuZ2l0aHViLmlvL3dlYi1kZXYtcHJhY3RpY2UvMTFfM2NvbHVtbl9wcmV2aXdfY2FyZC9cIixcbiAgICBcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmVtLWplZXQvd2ViLWRldi1wcmFjdGljZS90cmVlL2doLXBhZ2VzLzExXzNjb2x1bW5fcHJldml3X2NhcmRcIlxuICB9XG59XG4iXX0=
