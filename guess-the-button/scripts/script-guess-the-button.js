// In case the user forget to press the Start button when playing the first round
// he still will be able to play that round
let winningButton = Math.floor(Math.random() * 3) + 1;

// To play another (2'nd, 3'd and so on) round the user will have to press Start
function generateRandomNumber() {
  winningButton = Math.floor(Math.random() * 3) + 1;
}

function pressedButton(buttonId) {
  if (buttonId == winningButton) {
    document.getElementById("message1").textContent = ("You guessed! :)");
    document.getElementById("message1").style.color = "green";
    document.getElementById("message2").textContent = ("The winning button is " + winningButton);
  } else {
    document.getElementById("message1").textContent = ("You didn't guessed! :(");
    document.getElementById("message1").style.color = "red";
    document.getElementById("message2").textContent = ("The winning button is " + winningButton);
  }
}
