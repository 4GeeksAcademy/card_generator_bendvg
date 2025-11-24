import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suits = ["♦", "♥", "♠", "♣"];

  let randomIndex = Math.floor(Math.random() * cardValues.length);
  let randomValue = cardValues[randomIndex];

  document.getElementById("cardValue").innerText = randomValue;

  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomSuit = suits[randomSuitIndex];

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".symbolTop .symbolStyle").style.color = "red";
    document.querySelector(".symbolBottom .symbolStyle").style.color = "red";
  } else {
    document.querySelector(".symbolTop .symbolStyle").style.color = "black";
    document.querySelector(".symbolBottom .symbolStyle").style.color = "black";
  }

  document.querySelector(".symbolTop .symbolStyle").innerText = randomSuit;
  document.querySelector(".symbolBottom .symbolStyle").innerText = randomSuit;
  
  document.getElementById("refreshBtn").addEventListener("click", function () {
    location.reload(); 
  });


};
