/* "use strict";
const guessWord = document.querySelector(".guess-word");
const letters = document.querySelectorAll(".letters");
const alphabetGrid = document.querySelector(".alphabet-grid");
let guessedLetters = [];
let charArray = ["grass", "dolphin", "notebook", "orange", "papaya"];
let wordSelected = charArray[Math.floor(Math.random() * 5)];
for (let i = 0; i < wordSelected.length; i++) {
  const HTML = `<span class= "dashWord"> _ &nbsp </span>`;
  guessWord.insertAdjacentHTML("beforeend", HTML);
}
function displayWord() {
  guessWord.innerHTML = "";
  for (let i = 0; i < selectedWord.length; i++) {
    const letter = selectedWord[i];
    const HTML = `<span class="dashWord">${
      guessedLetters.includes(checkLetter) ? checkLetter : "_"
    }</span>`;
    guessWord.insertAdjacentHTML("beforeend", HTML);
  }
  const letterPress = function (event) {
    const checkLetter = event.target.innerHTML;
    guessedLetters.push(checkLetter);
    if (selectedWord.includes(checkLetter)) {
      displayWord();
    }
  };
}
letters.forEach(function (i) {
  i.addEventListener("click", letterPress);
});
*/
"use strict";

const guessWord = document.querySelector(".guess-word");
const letters = document.querySelectorAll(".letters");
const livesElement = document.querySelector("#lives");

let lives = 9;
const alphabetGrid = document.querySelector(".alphabet-grid");
let guessedLetters = [];
let charArray = [
  "grass",
  "dolphin",
  "notebook",
  "orange",
  "papaya",
  "calculator",
  "dress",
  "mango",
];
let wordSelected = charArray[Math.floor(Math.random() * 8)];
console.log(wordSelected);
for (let i = 0; i < wordSelected.length; i++) {
  const HTML = `<span class= "dashWord"> _ &nbsp </span>`;
  guessWord.insertAdjacentHTML("beforeend", HTML);
}

function displayWord() {
  guessWord.innerHTML = "";

  for (let i = 0; i < wordSelected.length; i++) {
    const letter = wordSelected[i];

    const HTML = `<span class="dashWord">${
      guessedLetters.includes(letter) ? letter : "_" + "&nbsp"
    }</span>`;

    guessWord.insertAdjacentHTML("beforeend", HTML);
  }
}

function letterPress(event) {
  const checkLetter = event.target.innerHTML.toLowerCase();
  // document.getElementsByClassName("letters").style.color = "red ";
  console.log(checkLetter);
  guessedLetters.push(checkLetter);

  if (wordSelected.includes(checkLetter)) {
    displayWord();
  } else {
    lives--;
    if (lives === 0) {
      livesElement.textContent = "You Lost :( ";
    } else {
      livesElement.textContent = `Lives: ${lives}`;
    }
  }
}

letters.forEach(function (i) {
  i.addEventListener("click", letterPress);
});
