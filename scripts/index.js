randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.getElementById('die1').src = "images/dice"+randomNumber1+".png";
document.getElementById('die2').src = "images/dice"+randomNumber2+".png";

if (randomNumber1 > randomNumber2) {
  document.querySelector("#content h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("#content h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("#content h1").innerHTML = "It's a DRAW!"
}
