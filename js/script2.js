let number1 = 0;
let number2 = -11;

if (number1 === number2) {
  console.log("number1 jest identyczne z number2");
}
if (number1 !== number2) {
  console.log("number1 jest różne od number2");
}

let someNumber = 5;
if (someNumber) {
  console.log("Liczba nie jest zerem");
}

let someText = "someone text";
if (someText) {
  console.log("Tekst nie jest pusty");
}

let number3 = 10;
let number4 = 46;
if (number3 > number4) {
  console.log("number3 jest wieksza od number4");
} else if (number3 < number4) {
  console.log("number4 jest większe od number3");
} else {
  console.log("number3 jest równe number4");
}
// do przeanalizowania
if (number1 > number2) {
  if (number1 > number3) {
    console.log("number1 jest największa!");
  } else {
    console.log("number3 jest największa!");
  }
} else {
  if (number2 > number3) {
    console.log("number2 jest największa!");
  } else {
    console.log("number3 jest największa!");
  }
}
//----------------------

if (number1 < number2 && number2 > number3 && number3 > number1) {
  console.log("Działa!");
}

if (number1 > 0 || number1 < number2) {
  console.log("Number1 większe od 0");
}

if (!(number1 > 0 || number1 < number2)) {
  console.log("Test negacji ! oraz || or");
}

let container = document.querySelector(".container");
console.log(container);

if (container.classList.contains("dark")) {
  console.log("Kontener jest ciemny");
} else {
  console.log("Kontener nie jest ciemny");
}

let button = document.querySelector(".button");
button.addEventListener("click", () => {
  if (button.innerText === "Włącz ciemny motyw") {
    button.innerText = "Wyłącz ciemny motyw";
  }
});
console.log(button);

let day = "środa";
switch (day) {
  case "poniedziałek":
  case "wtorek":
    console.log("Rozpoczął się tydzień");
    break;

  case "środa":
  case "czwartek":
    console.log("Niedługo weekend!");
    break;

  default:
    console.log("Jest weekend");
}

//potrójny operator

let message =
  number1 > number2 ? "Number1 jest większe" : "Number1 nie jest większe";
console.log(message);
