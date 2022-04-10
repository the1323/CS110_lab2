// cell location:
// 1 2 3
// 4 5 6
// 7 8 9

window.addEventListener("load", (event) => {
  console.log("load page");

  document
    .getElementById("cell1")
    .addEventListener("click", () => play("cell1"));
  document
    .getElementById("cell2")
    .addEventListener("click", () => play("cell2"));
  document
    .getElementById("cell3")
    .addEventListener("click", () => play("cell3"));
  document
    .getElementById("cell4")
    .addEventListener("click", () => play("cell4"));
  document
    .getElementById("cell5")
    .addEventListener("click", () => play("cell5"));
  document
    .getElementById("cell6")
    .addEventListener("click", () => play("cell6"));
  document
    .getElementById("cell7")
    .addEventListener("click", () => play("cell7"));
  document
    .getElementById("cell8")
    .addEventListener("click", () => play("cell8"));
  document
    .getElementById("cell9")
    .addEventListener("click", () => play("cell9"));
  document
    .getElementById("new_game")
    .addEventListener("click", () => play("new_game"));
  document
    .getElementById("reset")
    .addEventListener("click", () => play("reset"));
});
var turn = 0; //0==x 1==0
var isOver = false;
var xscore = 0,
  oscore = 0;
var board = (board = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
]);
function resetBoard() {
  turn = 0;

  isOver = false;
  board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  for (let i = 1; i < 10; i++) {
    document.getElementById("xo" + i).innerHTML = "";
  }
  document.getElementById("message").innerHTML = "Next: player X's turn";
}
function validateInput(input) {
  switch (input) {
    case "cell1":
      return 1;
    case "cell2":
      return 2;
    case "cell3":
      return 3;
    case "cell4":
      return 4;
    case "cell5":
      return 5;
    case "cell6":
      return 6;
    case "cell7":
      return 7;
    case "cell8":
      return 8;
    case "cell9":
      return 9;
    case "reset":
      return 10;
    case "new_game":
      return 11;
    default:
      console.log("input error");
      return -1;
  }
}
function updateBoard(choice) {
  if (choice == 11) {
    resetBoard();
    return;
  }
  if (choice == 10) {
    resetBoard();
    xscore = 0;
    oscore = 0;
    document.getElementById("xscore").innerHTML = "X Score: 0";
    document.getElementById("oscore").innerHTML = "O Score: 0";
  }
  if (isOver && choice < 10) return;
  // col and row are index 0-2 not 1-3
  col = (choice - 1) % 3;
  row = Math.floor((choice - 1) / 3);
  console.log(
    " row " + row + "col : " + col + "xo: " + choice + " turn " + turn
  );

  if (board[row][col] == -1 && !isOver) {
    // put rock update html if empty
    document.getElementById("xo" + choice).innerHTML = turn ? "O" : "X";
    board[row][col] = turn;
  }
  if (isFull()) {
    document.getElementById("message").innerHTML = "Game Over: Tie !!! ";
  } else {
    if (isWinner(row, col)) {
      document.getElementById("message").innerHTML = turn
        ? "Game Over: player O Win !"
        : "Game Over: player X Win !";

      if (turn == 0) {
        xscore++;
        document.getElementById("xscore").innerHTML = "X Score: " + xscore;
      } else {
        oscore++;
        document.getElementById("oscore").innerHTML = "O Score: " + oscore;
      }
    } else {
      document.getElementById("message").innerHTML = turn
        ? "Next: player X's turn"
        : "Next: player O's turn";
      turn = !turn;
    }
  }
}
function isFull() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] == -1) {
        // not full
        return false;
      }
    }
  }
  isOver = true;
  return true;
}
function isWinner(row, col) {
  let aa = "";
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      // not full
      aa += board[row][col];
    }
  }
  console.log("b: " + aa);
  let counter = 0;
  for (let i = 0; i < 3; i++) {
    if (board[row][i] == turn) {
      //check "---"
      counter++;
    }
  }
  if (counter == 3) {
    isOver = true;
    return true;
  }
  counter = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][col] == turn) {
      //check "|"
      counter++;
    }
  }
  if (counter == 3) {
    isOver = true;
    return true;
  }

  if (board[0][0] == turn && board[1][1] == turn && board[2][2] == turn) {
    //check "\"
    isOver = true;
    return true;
  }
  if (board[0][2] == turn && board[1][1] == turn && board[2][0] == turn) {
    //check "/"
    isOver = true;
    return true;
  }
  return false;
}
function play(input) {
  console.log("input: " + input);
  var choice = validateInput(input);
  updateBoard(choice);
}
