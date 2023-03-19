//zmiana tła ->
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

/*
 Sposób przełaczania operatorami if/els 

 if (body.classList.contains("dark")) {
    themeName.innerText = "jasny";
  } else {
    themeName.innerText = "ciemny";
  }
 }); */

//Dzień i czas ->

let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");

/*Sposób potrójnego operatora

howMuch.innerText=day === ("poniedziałek" || day === "wtorek")?"dużo":((day === "środa" || day === "czwartek")? "trochę":"mało");
*/

/* if/else

if (day === "poniedziałek" || day === "wtorek") {
  howMuch.innerText = "dużo";
} else if (day === "środa" || day === "czwartek") {
  howMuch.innerText = "trochę";
} else {
  howMuch.innerText = "mało";
}
*/

//switch - najbardziej odpowiedni do tego

switch (day) {
  case "poniedziałek":
  case "wtorek":
    howMuch.innerText = "dużo";
    break;

  case "środa":
  case "czwartek":
    howMuch.innerText = "trochę";
    break;

  default:
    howMuch.innerText = "mało";
}
