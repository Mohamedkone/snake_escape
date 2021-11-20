const board = document.getElementById('board');
const ctx = board.getContext('2d')

let speed = 10
//snake head size
let snakeHeadX = 10
let snakeHeadY = 10
//initialize snake movement on x and y variable
let xMove=0
let yMove=0
//Detect keydown repetion variable
let current = 0
//initialize tile amount and size
let tile = 30
let tileSize= board.width / tile - 2 


const startGame = () =>{
    if (snakeHeadX * tile > 580 || snakeHeadX * tile < 15 || snakeHeadY * tile < 15 || snakeHeadY * tile > 580) {
        console.log('You lost')
    } else {
        
    clearCanvas()
    snakePosition()
    snake()
    setTimeout(startGame, 1000/ speed)
    }
}

const clearCanvas= () =>{
    ctx.fillStyle = '#6d76df';
    ctx.fillRect(0,0,board.width,board.height)
}
const snakePosition = () =>{
    snakeHeadX = snakeHeadX + xMove
    snakeHeadY = snakeHeadY + yMove
    
}
const snake = () =>{
    ctx.fillStyle = '#859241'
    ctx.fillRect(snakeHeadX * tile , snakeHeadY * tile, tileSize, tileSize)
}


startGame()




