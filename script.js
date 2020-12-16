"use strict";
// this variable is for generating random numbers from 1-20
let secretNum = Math.trunc(Math.random() * 20) + 1;
//this element unveils the GOLD IMAGE
let goldCall = function () {
  document.querySelector(".goldHide").classList.remove("hidden");
};

//this element hides unveils the GOLD IMAGE
let goldHideCall = function () {
  document.querySelector(".goldHide").classList.add("hidden");
};
//display message of Hint
let messageCall = function (message) {
  document.querySelector(".message").textContent = message;
};
//display the score chances left for the player
let scoreCall = function (score) {
  score = document.querySelector(".score").textContent = score;
};
//hide the secret Number with a ? text
document.querySelector(".number").textContent = "?";
//
let score = 20;
let highscore = 0;

//Event handler for clicking on the Check button
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(document.querySelector(".guess").value);
  console.log(typeof guessValue, guessValue);
  score--;
  // statement to display number of chances left
  if (guessValue) {
    scoreCall(score);
  }
  //statement to check if the guess value inputed is equal to the secret number

  guessValue > secretNum ? messageCall("Too High") : messageCall("Too Low");
  scoreCall(score);
  // A condtion set to give a Hint to the player to get them Near to GOLD
  //Condition to remind the player to enter a valid Number
  if (!guessValue) {
    messageCall("Enter Number");
  } else if (guessValue > 20) {
    messageCall("Enter Number from 1-20");
  }
  //condition to notify GAME OVER when all 20 chances are exhausted
  if (score < 0) {
    score = 0;
    scoreCall(score);
    messageCall("GAME OVER");
  }

  if (guessValue === secretNum) {
    //messageCall("YOU WON");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message").textContent = "YOU WON!!!";
    console.log("You won");
    document.querySelector(".number").textContent = secretNum;
    goldCall();
    //a condition to store and display the highest score
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

// Event handler to Try Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#09033f";
  messageCall("Start guessing...");
  scoreCall(score);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  goldHideCall();
});
