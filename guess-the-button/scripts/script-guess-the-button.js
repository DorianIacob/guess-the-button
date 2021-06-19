function pressedButton(buttonId) {
  let winningButton = Math.floor(Math.random() * 3) + 1;
  if (buttonId == winningButton) {
    document.getElementById("message1").textContent = ("You guessed! :)");
    document.getElementById("message1").style.color = "green";
    document.getElementById("message2").textContent = ("The winning button is " + winningButton);
  } else {
    document.getElementById("message1").textContent = ("You didn't guessed! :)");
    document.getElementById("message1").style.color = "red";
    document.getElementById("message2").textContent = ("The winning button is " + winningButton);
  }
}