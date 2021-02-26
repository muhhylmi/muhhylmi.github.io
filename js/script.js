// ABOUT ANIMATION

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");
var img = document.querySelector(".skills-logo");

// code for the isElementInViewport function
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// GELAP TERANG ANIMATION

var body = document.querySelector("body");
var btn_on = document.querySelector(".fa-toggle-on");
var btn_off = document.querySelector(".fa-toggle-off");
var sun = document.querySelector(".fa-sun");
var moon = document.querySelector(".fa-moon");
var link = document.querySelectorAll("a");
var button = document.querySelector("button");
var header = document.querySelector(".header");
var linkmore = document.querySelectorAll(".card .moreporto span");
var closemore = document.querySelectorAll(".list .card-body i");
var card = document.querySelectorAll("#portfolio .card");

btn_on.addEventListener("click", function () {
  btn_on.style.display = "none";
  btn_off.style.cssText = "display:block; color:#fff;";
  sun.style.display = "none";
  moon.style.display = "block";
  btn_on.style.color = "#fff";
  button.style.color = "#fff";
  body.style.cssText = "color: #fff; background-color:#111;";
  for (var i = 0; i < link.length; i++) {
    link[i].style.color = "#fff";
  }
  card.forEach((c) => {
    c.style.backgroundColor = "#111";
  });
});

btn_off.addEventListener("click", function () {
  btn_on.style.cssText = "display:block; color:#111;";
  btn_off.style.cssText = "display:none";
  sun.style.display = "block";
  moon.style.display = "none";
  btn_on.style.color = "blue";
  button.style.color = "#111";
  body.style.cssText = "color: #111; background-color:#fff;";
  for (var i = 0; i < link.length; i++) {
    link[i].style.color = "#111";
  }
  card.forEach((c) => {
    c.style.backgroundColor = "#fff";
  });
});

// HEADER SCROLLED
window.addEventListener("scroll", function (el) {
  height_scroll = window.pageYOffset;
  if (height_scroll >= 200) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

//BACK TO TOP
let backtop = document.querySelector(".back-to-top");

backtop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

let menu = document.querySelector(".hamburg i");
let closemenu = document.querySelector("#closemenu");

menu.addEventListener("click", function () {
  document.querySelector(".nav").classList.add("visible");
  header.classList.remove("header-scrolled");
  document.querySelector(".hamburg").style.display = "none";
});

closemenu.addEventListener("click", function () {
  document.querySelector(".nav").classList.remove("visible");
  header.classList.add("header-scrolled");
  document.querySelector(".hamburg").style.display = "block";
});

//MENU TO ID SECTION
var navlinks = document.querySelectorAll(".nav li a");

for (var i = 0; i <= navlinks.length - 1; i++) {
  nav_click = navlinks[i];

  nav_click.addEventListener("click", function () {
    link = nav_click.getAttribute("href");
    link.scrollIntoView;
  });
}

//FOOTER MENU TO SECTION
var footerlink = document.querySelectorAll(".footer ul li a");

footerlink.forEach((link) => {
  link.addEventListener("click", () => {
    anchor = link.getAttribute("href");
    anchor.scrollIntoView;
  });
});

// CURSOR CUSTOMIZATION
var mouseCursor = document.querySelector(".cursor");
var bubble = document.querySelectorAll(".bubble img");
window.addEventListener("mousemove", function (e) {
  // console.log(e.pageY)
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  for (var i = 0; i < bubble.length; i++) {
    bubble[i].style.top = e.pageY + "px";
    bubble[i].style.left = e.pageX + "px";
    bubble[i].addEventListener("mouseover", function () {
      body.style.color = "#cc005f";
    });
  }
});

var ikon = document.querySelectorAll("i");
var all = document.querySelectorAll("*");
var section = document.querySelectorAll("section");
var pic = document.querySelectorAll("img");

ikon.forEach((a) => {
  a.addEventListener("mouseover", () => {
    mouseCursor.style.cssText =
      "transform:scale(2); transition:transform .5s ease; background-color:#cc005f; opacity:0.6;";
  });
  a.addEventListener("mouseleave", () => {
    mouseCursor.style.cssText =
      "transform:scale(1); transition:transform .5s ease; background-color:transparent; opacity:1;";
  });
});

link.forEach((a) => {
  a.addEventListener("mouseover", () => {
    mouseCursor.style.cssText =
      "transform:scale(2); transition:transform .5s ease; background-color:#cc005f; opacity:0.6;";
  });
  a.addEventListener("mouseleave", () => {
    mouseCursor.style.cssText =
      "transform:scale(1); transition:transform .5s ease; background-color:transparent; opacity:1;";
  });
});

pic.forEach((a) => {
  a.addEventListener("mouseover", () => {
    mouseCursor.style.cssText =
      "transform:scale(2); transition:transform .5s ease; background-color:#cc005f; opacity:0.6;";
  });
  a.addEventListener("mouseleave", () => {
    mouseCursor.style.cssText =
      "transform:scale(1); transition:transform .5s ease; background-color:transparent; opacity:1;";
  });
});

button.addEventListener("mouseover", () => {
  mouseCursor.style.cssText =
    "transform:scale(2); transition:transform .5s ease; background-color:#cc005f; opacity:0.6;";
});
button.addEventListener("mouseleave", () => {
  mouseCursor.style.cssText =
    "transform:none; transition:all .5s ease; background-color:transparent; opacity:1;";
});

//SEND FORM TO GOOGLE SHEETS
var success = document.querySelector(".alert-success");
var gagal = document.querySelector(".alert-danger");
var loader = document.querySelector("#loader");

function SubForm() {
  loader.style.display = "inline";
  $.ajax({
    url: "https://api.apispreadsheets.com/data/5613/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      success.style.display = "block";
      loader.style.display = "none";
      console.log(data);
    },
    error: function () {
      gagal.style.display = "block";
      loader.style.display = "none";
    },
  });
}

// PRTFOLIO MODAL
linkmore.forEach((l) => {
  l.addEventListener("click", () => {
    l.parentElement.parentElement.nextElementSibling.style.display = "block";
  });
});

closemore.forEach((c) => {
  c.addEventListener("click", () => {
    c.parentElement.parentElement.style.display = "none";
  });
});

// console.log(closemore);

// 	img.addEventListener('mouseleave', ()=>{
// 		linkport.forEach(l=>{
// 			l.style.cssText =
// 			'display:none;	';
// 		});
// 	});
// });
