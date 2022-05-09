"use strict";

const btnAgain = document.querySelector(".again");
let secretNumber = document.querySelector(".number");
let checkButton = document.querySelector(".check");
let message = document.querySelector(".message");
const ansMessage = function (mess) {
  message.textContent = mess;
};
let score = 20;
let highscore = 0;

let scores = document.querySelector(".score");

let highscores = document.querySelector(".highscore");

let secret = Math.trunc(Math.random() * 20) + 1;

checkButton.addEventListener("click", function () {
  let guessNumber = document.querySelector(".guess");
  let guess = Number(guessNumber.value);
  if (guess == 0) {
    ansMessage("⛔️ No number!");
  } else if (guess === secret) {
    secretNumber.textContent = secret;
    ansMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    if (score > highscore) {
      highscore = score;
      highscores.textContent = highscore;
    }
  } else {
    if (score > 1) {
      ansMessage(guess > secret ? "📈 Too high!" : "📉 Too low!");
      score--;
      scores.textContent = score;
    } else {
      ansMessage("💥 You lost the game!");
      scores.textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  ansMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  secretNumber.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
