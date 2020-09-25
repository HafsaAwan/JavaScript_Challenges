//add for draw game
//change color green and red
let board = [
  "-", "-", "-",
  "-", "-", "-",
  "-", "-", "-"
];

const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

let player1 = "X"
let player2 = "O"
let currentPlayer =""

let counter=1 // counter to select alternate players

//select boxes
let boxes = document.querySelectorAll('.box')
//select game board
const gameBoard = document.querySelector("#board")

//add event listener on game boxes
for(let box of boxes){
  box.addEventListener("click", (e)=>placePiece(e))
  
//gameBoard.addEventListener("click", (e)=>placePiece(e))
}

let currentP = document.getElementById("current-player")
currentP.innerText = "Player 1" //set player 1 to begin
let temp = ""
let winGame = false

/* check win by comparing game board with the winCombos */
const checkWin = () => {
  for (let i=0; i<winCombos.length;i++){
    //when i= 0, we have [0,1,2]
    for(let j=0; j<winCombos[i].length; j++){
      if(board[winCombos[i][j]] !="-"){  
        temp = temp + board[winCombos[i][j]]
      }
      if(temp ==="XXX" || temp ==="OOO"){
        winGame = true
        break
      }
    }
    temp = ""
    console.log(winGame)
  }
  
}

/* end game when there is a winner */
const endGame = () => {
  alert("Won")
}


/* function to place piece  */
const placePiece = (e) => {

  if(counter % 2 === 0){

    currentPlayer = player2;
    currentP.innerText = "Player 2"
  } else {

    currentPlayer = player1;
    currentP.innerText = "Player 1"
  }
  
  //get the box selected
  let selectedCell = e.target;
  
  //check to see if box is empty, and game is not won, only then allow input piece
  if(board[selectedCell.id] =="-"){
    if(!winGame){
      //display on html
      selectedCell.innerHTML = currentPlayer;
    
      //store in the board array
      board[selectedCell.id] = currentPlayer;
      
      //call function to check if any player won
      checkWin()
      counter++;
      
      //End game if winner found
      if(winGame === true){
        endGame() 
      }
      
    }
  }
  
  
}

 



