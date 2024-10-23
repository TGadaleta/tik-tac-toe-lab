/*-------------------------------- Constants --------------------------------*/
const winningCombos = [ //array holding each winning combination
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner //declare all needed variables
let tie
let squareId
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr') //grab all squares
const messageEl = document.querySelector('#message') //grab message
const boardEl = document.querySelector('.board') //grab board
const resetBtn = document.querySelector('#reset')
/*-------------------------------- Functions --------------------------------*/
init() //initiating our game
function init(){ //starting values for our game
    board = ['','','','','','','','','']
    turn = 'X'
    winner = false
    tie = false
    render() //initial rendering of our board and message
}
function render(){ //updates our message and board
    updateBoard()
    updateMessage()
}
function updateBoard(){ 
    board.forEach((square,index) => squareEls[index].textContent = square //sets the square in html to reflect the board array
)}
function updateMessage(){ //changes our message during the game
    if (winner===false && tie===false){ //checks if there has been a winner or if it's a tie
        messageEl.textContent = `It's ${turn} Player's Turn` //changes message to reflect the current turn
    }
    if (winner===false && tie===true){ //changes message to reflect a tie
        messageEl.textContent = `It's A Tie!!!`
    }
    if (winner===true && tie===false){ //changes message to reflect a winner
        messageEl.textContent = `Player ${turn} Won!!!`
    }
}
function handleClick(event){ //handles what to do if a square is clicked
    squareId = Number(event.target.id)
    if(board[squareId] !== 'X' && board[squareId] !== 'O') //makes sure the square wasn't clicked before
        placePiece() //calles on place piece function to add the value to the square
        checkForWinner()
        checkForTie()
        switchPlayerTurn()
        render()  //calls the render function
}
function placePiece(){
    if (winner === true || tie === true) return //don't add a piece if winner or tie is true
    board[squareId] = turn //changes the correct square on board array to current players value
}
function checkForWinner(){ //checks if a player has won
    winningCombos.forEach((combo) => {
        if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) //checks our three conditions that need to be true to get a winner
        winner = true //sets our winner variable to true
    })
}
function checkForTie(){ //checks if there is a tie
    if (winner === true) return //if there is already a winner, return from function
    if (!board.includes('')) tie = true //if there are no more empty strings in our board array, set tie to true
}
function switchPlayerTurn(){ //call to change the players turn
    if (winner === true) return //if there is a winner no need to change
    if (tie === true) return //if there is a tie no need to change
    turn = turn === 'X' ? 'O' : 'X' //toggles between X's and O's turns
}
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click',handleClick) //event listener for clicking a square
resetBtn.addEventListener('click',init) //event listener for clicking reset button