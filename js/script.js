console.log("Witaj w konsoli");

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let photo1 = document.querySelector(".photo1");
let photo2 = document.querySelector(".photo2");
let photo3 = document.querySelector(".photo3");
let buttonx = document.querySelector(".buttonx");

button1.addEventListener("click", () => {
  photo1.remove();
  button1.innerText = "Usuń mnie!";
});

buttonx.addEventListener("click", () => {
  buttonx.remove();
});

button2.addEventListener("click", () => {
  photo2.hidden = !photo2.hidden;
  button2.innerText = photo2.hidden
    ? "Pokaż zdjecie z USA"
    : "Ukryj zdjęcie z USA";
});

debugger;

button3.addEventListener("click", () => {
  photo3.hidden = !photo3.hidden;
  button3.innerHTML = photo3.hidden
    ? "Pokaż zdjecie z Australi"
    : "Ukryj zdjęcie z Australi";
});

console.log(button1, button2, button3);
