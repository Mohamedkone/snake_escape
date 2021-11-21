const setUp = () => {
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


const playB = document.getElementById('play')
const game = document.getElementById('game')


    playB.classList.remove("show")
    playB.classList.add("hide")
    game.classList.remove("hide")
    game.classList.add("show")



const startGame = () =>{
    if (snakeHeadX * tile > 580 || snakeHeadX * tile < 15 || snakeHeadY * tile < 15 || snakeHeadY * tile > 580) {
        setUp()
    } else {
        
    clearCanvas()
    snakePosition()
    snake()
    setTimeout(startGame, 1000/ speed)
    }
}


const clearCanvas= () =>{
    
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0,0,board.width,board.height)
    ctx.drawImage(img,0,0,600,600)
}
let img = new Image()
img.src = "./assets/soil.jpg"
img.addEventListener("load",clearCanvas())
const snakePosition = () =>{
    snakeHeadX = snakeHeadX + xMove
    snakeHeadY = snakeHeadY + yMove
    
}
const snake = () =>{
    ctx.fillStyle = '#85e241'
    ctx.fillRect(snakeHeadX * tile , snakeHeadY * tile, tileSize, tileSize)
}

const direction = (e) =>{
    if (current != e) {
    
    switch (e) {
        case 38:
            yMove = -.5
            xMove = 0
            current = e
            console.log(current)
            snakePosition()
            break;
        case 40:
            yMove = .5
            xMove = 0
            current = e
            console.log(e)
            snakePosition()
            break;
        case 37:
            yMove = 0
            xMove = -.5
            current = e
            console.log(e)
            snakePosition()
            break;
        case 39:
            yMove = 0
            xMove = .5
            current = e
            console.log(e)
            snakePosition()
            break;
    
        default:
            break;
    }
}

}

startGame()

document.body.addEventListener('keydown', (event)=>{
    direction(event.keyCode)
})

}
