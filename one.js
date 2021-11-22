
let death = 0



const setUp = () => {
const board = document.getElementById('board')
const ctx = board.getContext('2d')

let randomX =  Math.floor(Math.random() * (550 - 40) + 40)
let randomY =  Math.floor(Math.random() * (550 - 40) + 40)
let randomXp = randomX -15
let randomXps = randomX +15
let randomYp = randomY - 15
let randomYps = randomY + 15

let eat = 0
let speed = 20
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
const ffff = document.getElementById("gameOver")


    playB.classList.remove("show")
    playB.classList.add("hide")
    ffff.classList.add("hide")
    game.classList.remove("hide")
    game.classList.add("show")

const decision = () =>{
   
   ffff.classList.remove("hide")
}



const startGame = () =>{
    if (snakeHeadX * tile > 580 || snakeHeadX * tile < 0 || snakeHeadY * tile < 0 || snakeHeadY * tile > 580) {
        decision()
        death += 1
        document.getElementById("deathCount").innerText = death
    } else {
       
    clearCanvas()
    rat1()
    snakePosition()
    snake()
    console.log(snakeHeadX * tile ,snakeHeadY * tile)
    if (snakeHeadX * tile > randomXp && snakeHeadX * tile < randomXps && snakeHeadY * tile > randomYp && snakeHeadY * tile < randomYps) {
        eat += 1
        console.log("yyy")
        document.getElementById("eat").innerText = eat
        randomX =  Math.floor(Math.random() * (550 - 40) + 40)
        randomY =  Math.floor(Math.random() * (550 - 40) + 40)
        randomXp = randomX -15
        randomXps = randomX +15
        randomYp = randomY - 15
        randomYps = randomY + 15
    }
    setTimeout(startGame, 1000/ speed)
    }
}

const eatRat =() =>{

}


const clearCanvas= () =>{
    
    ctx.fillStyle = '#e04c3e';
    ctx.fillRect(0,0,board.width,board.height)
    ctx.drawImage(img,0,0,600,600)
}
let img = new Image()
img.src = "./assets/soil.jpg"
img.addEventListener("",clearCanvas())
const snakePosition = () =>{
    snakeHeadX = snakeHeadX + xMove
    snakeHeadY = snakeHeadY + yMove

    
}
const snake = () =>{
    ctx.fillStyle = '#85e241'
    ctx.fillRect(snakeHeadX * tile , snakeHeadY * tile, tileSize, tileSize)
    
}
const rat1 = () => {
    ctx.drawImage(ratImg,randomX,randomY,25,25)
    console.log(randomX,randomY)
}
let ratImg = new Image()
ratImg.src = "./assets/rat.svg"
img.addEventListener("",rat1())

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
document.getElementById("eat").innerText = eat

}
const quit = () => {
    window.location.href = "index.html"
}
