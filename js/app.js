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
let winner
let tie
let squareId
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr') //grab all squares
const messageEl = document.querySelector('#message') //grab message
const boardEl = document.querySelector('.board') //grab board
/*-------------------------------- Functions --------------------------------*/
init() //initiating our game
function init(){ //starting conditions for our game
    board = ['','','','','','','','','']
    turn = 'X'
    winner = false
    tie = false
    render() //initial rendering of our board and message
}
function render(){ //updates our message and board when a square is clicked
    updateBoard()
    updateMessage()
}
function updateBoard(){ //updates our board by looking at our board interval and setting the text content of the html element to the current value of turn
    board.forEach((square,index) => squareEls[index].textContent = square
)}
function updateMessage(){ //changes our message during the game
    if (winner===false && tie===false){ //changes message to reflect the current turn
        messageEl.textContent = `It's ${turn} Player's Turn`
    }
    if (winner===false && tie===true){ //changes message to reflect a tie
        messageEl.textContent = `It's A Tie!!!`
    }
}
function handleClick(event){ //handles what to do if a square is clicked
    squareId = Number(event.target.id)
    if(board[squareId] !== 'X' && board[squareId] !== 'O') //makes sure the square wasn't clicked before
        placePiece() //calles on place piece function to add the value to the square
}
function placePiece(){
    board[squareId] = turn //changes the correct index on board to the value of whose turn it is
    turn = turn === 'X' ? 'O' : 'X' //toggles between X's and O's turns
    render()  //calls the render function
}
function checkForWinner(){
    
}
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click',handleClick) //event listener for clicking a square


