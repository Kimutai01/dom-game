"use strict";

const btnAgain = document.querySelector(".again");
let secretNumber = document.querySelector(".number");
let guessNumber = document.querySelector(".guess");
let checkButton = document.querySelector(".check");

let score = document.querySelector(".score");

let highscore = document.querySelector(".highscore");

let secret = Math.trunc(Math.random() * 20) + 1;
console.log(secret);
secretNumber.textContent = secret;

checkButton.addEventListener("click", function () {});
