window.addEventListener("load", (event) => {
  console.log("load page");
  document.getElementById("rock").addEventListener("click", () => play("rock"));
  document
    .getElementById("paper")
    .addEventListener("click", () => play("paper"));
  document
    .getElementById("scissor")
    .addEventListener("click", () => play("scissor"));
});
function play(choice) {
  console.log("click");
  var pcChoice = getRandomChoice();
  var message = document.getElementById("result");
  if (choice == pcChoice) {
    message.innerHTML = "tie...";
  } else if (
    (pcChoice == "paper" && choice == "rock") ||
    (pcChoice == "rock" && choice == "scissor") ||
    (pcChoice == "scissor" && choice == "paper")
  ) {
    console.log("pc: " + pcChoice);
    message.innerHTML = "bot win. you: " + choice + " bot: " + pcChoice;
  } else {
    console.log("pc: " + pcChoice);
    message.innerHTML = "player win. you: " + choice + " bot: " + pcChoice;
  }
}
function getRandomChoice() {
  num = Math.floor(Math.random() * 3 + 1);
  switch (num) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}
