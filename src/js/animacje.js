
// ---- Mobile Burger Animation -----
var burger = false;

function ClickMenu(x) {
  var nav = document.getElementById("nav");
  var h1 = document.getElementById("HeaderH1");
  x.classList.toggle("change");
  nav.classList.remove("zoomInDown");
  nav.classList.remove("zoomOut");
  if (burger == false) {
    nav.classList.add("zoomInDown");
    nav.style.display = "block";
    h1.animate({
      marginTop: ["50px", "210px"],
      easing: ["ease-out", "ease-in"]
    }, 1100);
    setTimeout(function () {
      h1.style.marginTop = "210px";
    }, 1000);
    burger = true;
  } else {
    nav.classList.add("zoomOut");
    setTimeout(function () {
      nav.style.display = "none";
    }, 700);
    h1.animate({
      marginTop: ["210px", "50px"],
      easing: ["ease-in", "ease-out"]
    }, 1100);
    setTimeout(function () {
      h1.style.marginTop = "50px";
    }, 1000);
    burger = false;
  }
}
// ---- All AOS animation on page -----
let h3 = document.querySelectorAll("h3");
let Services__el = document.querySelectorAll(".ServicesItems__el");
let MeetTeam__el = document.querySelectorAll(".MeetTeam__el");
let SkillDiagram__el = document.querySelectorAll(".SkillDiagram__el");
let PortfolioItem__el = document.querySelectorAll(".PortfolioItem__el");
let PeopleReviews__el = document.querySelectorAll(".PeopleReviews__el");
let Button = document.querySelectorAll("button");

for (let j = 0; j < h3.length; j++) {
  h3[j].setAttribute('data-aos', 'zoom-out');
}
for (let j = 0; j < 4; j++) {
  Services__el[j].setAttribute('data-aos', 'zoom-in');
  MeetTeam__el[j].setAttribute('data-aos', 'zoom-in');
  SkillDiagram__el[j].setAttribute('data-aos', 'zoom-in');
  PortfolioItem__el[j].setAttribute('data-aos', 'zoom-in');
  PeopleReviews__el[j].setAttribute('data-aos', 'zoom-in');
}
for (let j = 0; j < Button.length; j++) {
  Button[j].setAttribute('data-aos', 'button-animation');
}

