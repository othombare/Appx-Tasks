let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameActive = true;
const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("resetBtn");
const winPatterns = [

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];
cells.forEach(cell => {
cell.addEventListener("click", function(){
const index = this.getAttribute("data-index");
if(board[index] != "" || !gameActive){
return;
}
board[index] = currentPlayer;
this.innerText = currentPlayer;
checkWinner();
});
});

function checkWinner(){
for(let pattern of winPatterns){
let a = pattern[0];
let b = pattern[1];
let c = pattern[2];
if(board[a] != "" &&
board[a] == board[b] &&
board[a] == board[c]){
statusText.innerText = "Player " + board[a] + " Wins!";
gameActive = false;
return;
}
}
if(!board.includes("")){
statusText.innerText = "Draw!";
gameActive = false;
return;
}
currentPlayer = currentPlayer == "X" ? "O" : "X";
statusText.innerText = "Player " + currentPlayer + " Turn";
}

resetBtn.addEventListener("click", function(){
board = ["","","","","","","","",""];
currentPlayer = "X";
gameActive = true;
statusText.innerText = "Player X Turn";
cells.forEach(cell => {
cell.innerText = "";
});
});