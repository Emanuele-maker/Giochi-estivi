/* Pong (Codice sorgente) */

/* 
 * Questo minigioco è un semplice clone del famosissimo Pong, in cui ho voluto ricreare alcune meccaniche basilari da implementare in un gioco
 * per creare gli oggetti ho utilizzato il marcatore HTML <canvas>, che ho scoperto essere molto utile e facile da utilizzare, viste le sue utlissime funzioni implementate
 */

//Questo oggetto rappresenta il giocatore messo più in basso

class Player1 {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.scale = {
            width: 150,
            height: 20
        }
        this.position = {
            x: this.gameWidth / 2 - this.scale.width / 2,
            y: 550
        }
        this.speed = 0
        this.maxSpeed = 3
    }
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.scale.width, this.scale.height)
    }
    update() {
        this.position.x += this.speed

        if (this.position.x < 0) {
            this.position.x = 0
        }
        if (this.position.x + this.scale.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.scale.width
        }
    }
    moveLeft() {
        this.speed = -this.maxSpeed
    }
    moveRight() {
        this.speed = this.maxSpeed
    }
    stop() {
        this.speed = 0
    }
}

//Questo oggetto rappresenta il giocatore messo più in alto

class Player2 {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.scale = {
            width: 150,
            height: 20
        }
        this.position = {
            x: this.gameWidth / 2 - this.scale.width / 2,
            y: 50
        }
        this.speed = 0
        this.maxSpeed = 3
    }
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.scale.width, this.scale.height)
    }
    update() {
        this.position.x += this.speed

        if (this.position.x < 0) {
            this.position.x = 0
        }
        if (this.position.x + this.scale.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.scale.width
        }
    }
    moveLeft() {
        this.speed = -this.maxSpeed
    }
    moveRight() {
        this.speed = this.maxSpeed
    }
    stop() {
        this.speed = 0
    }
}

//Questo oggetto rappresenta la pallina, la quale ha una semplice meccanica che le permette di muoversi all'infinito e un'altra per controllare le sue collisioni: ogni volta che rimbalzerà a un muro, la sua velocità aumenterà

class Ball {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.radius = 15
        this.position = {
            x: this.gameWidth / 2 - this.radius / 2,
            y: this.gameHeight / 2 - this.radius / 2
        }
        this.speed = {
            x: 2,
            y: 2.2
        }
        this.turn = "up"
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true)
        ctx.fill()
        ctx.closePath()
    }
    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if (this.position.x - 10 <= 0 || this.position.x + this.radius >= this.gameWidth) {
            this.speed.x = -this.speed.x
            increaseBallSpeed(this)
        }
        if (this.position.y - 10 <= 0) {
            score1++
            this.reset()
        }
        if (this.position.y + this.radius >= this.gameHeight) {
            score2++
            this.reset()
        }
    }
    reset() {
        this.position = {
            x: this.gameWidth / 2 - this.radius / 2,
            y: this.gameHeight / 2 - this.radius / 2
        }
        if (this.turn === "up") {
            this.speed = {
                x: 2,
                y: 2.2
            }
            this.turn = "down"
        } else if (this.turn === "down") {
            this.speed = {
                x: -2,
                y: -2.2
            }
        }
    }

}

//dichiarazione di tutte le variabili globali


let canvas, ctx, player1score, player2score, startBtn

let score1 = 0
let score2 = 0

let player1, player2, ball

let gameStatus = "PAUSED"
let alreadyStarted = false

function init() {
    canvas = document.getElementById("canvas")
    startBtn = document.getElementById("startBtn")
    ctx = canvas.getContext("2d")

    canvas.width = canvas.height = 600

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    player1score = document.getElementById("player1score")
    player2score = document.getElementById("player2score")

    player1 = new Player1(canvas.width, canvas.height)
    player2 = new Player2(canvas.width, canvas.height)
    ball = new Ball(canvas.width, canvas.height)

    document.addEventListener("keyup", (event) => {
        if ((event.keyCode === 37 && player1.speed < 0) || (event.keyCode === 39 && player1.speed > 0)) {
            player1.speed = 0
        }
        if ((event.keyCode === 65 && player2.speed < 0) || (event.keyCode === 68 && player2.speed > 0)) {
            player2.speed = 0
        }
    })

    document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
            case 37:
                player1.moveLeft()
                break
            case 39:
                player1.moveRight()
                break
            case 65:
                player2.moveLeft()
                break
            case 68:
                player2.moveRight()
                break
            case 83:
                if (!alreadyStarted) {
                    alreadyStarted = true
                    startBtn.style.display = "none"
                    ball.reset()
                    gameStatus = "PLAYING"
                    gameLoop()
                }
                break
        }
    })

    document.addEventListener("mousedown", (event) => {
        if (gameStatus === "PLAYING") {
            if (event.offsetX > 0 && event.offsetX < canvas.width / 2 && event.offsetY > 0 && event.offsetY < canvas.height / 2) {
                player2.moveLeft()
            } else if (event.offsetX > canvas.width / 2 && event.offsetY > 0 && event.offsetY < canvas.height / 2) {
                player2.moveRight()
            } else if (event.offsetX > 0 && event.offsetX < canvas.width / 2 && event.offsetY > canvas.height / 2) {
                player1.moveLeft()
            } else if (event.offsetX > canvas.width / 2 && event.offsetY > canvas.height / 2) {
                player1.moveRight()
            }
        }
    })
    document.addEventListener("mouseup", () => {
        if (player1.speed !== 0) {
            player1.stop()
        }
        if (player2.speed !== 0) {
            player2.stop()
        }
    })

    gameStatus = "STARTING"

    gameLoop()
}

function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.radius;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.scale.width;
    let bottomOfObject = gameObject.position.y + gameObject.scale.height;

    if (
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.radius <= rightSideOfObject &&
        gameObject === player1
    ) {
        return true;
    } else if (
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.radius <= rightSideOfObject &&
        gameObject === player2
    ) {
        return true;
    } else {
        return false;
    }
}

function increaseBallSpeed(ball) {
    if (Math.sign(ball.speed.x) === 1) {
        ball.speed.x += 0.1
    } else if (Math.sign(ball.speed.x) === -1) {
        ball.speed.x -= 0.1
    }
    if (Math.sign(ball.speed.y) === 1) {
        ball.speed.y += 0.1
    } else if (Math.sign(ball.speed.y) === -1) {
        ball.speed.y -= 0.1
    }
}


function gameLoop() {
    if (gameStatus === "PLAYING") {
        ctx.clearRect(0, 0, 600, 600)
        player1score.innerText = score1
        player2score.innerText = score2
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "white"
        player1.draw(ctx)
        player1.update()
        player2.draw(ctx)
        player2.update()
        ball.draw(ctx)
        ball.update()
        if (detectCollision(ball, player1)) {
            ball.speed.y = -ball.speed.y
            ball.position.y = player1.position.y - ball.radius
            increaseBallSpeed(ball)
        }
        if (detectCollision(ball, player2)) {
            ball.speed.y = -ball.speed.y
            ball.position.y = player2.position.y + ball.radius + 10
            increaseBallSpeed(ball)
        }
        if (score1 === 10) {
            ctx.font = "30px Comic Sans MS"
            ctx.textAlign = "center"
            ctx.fillText("player 1 wins!", canvas.width / 2, canvas.height / 2 - 30)
            alreadyStarted = false
            startBtn.style.display = "inline"
            score1 = 0
            score2 = 0
            gameStatus = "PAUSED"
        }
        if (score2 === 10) {
            ctx.font = "30px Comic Sans MS"
            ctx.textAlign = "center"
            ctx.fillText("player 2 wins!", canvas.width / 2, canvas.height / 2 - 30)
            alreadyStarted = false
            startBtn.style.display = "inline"
            score1 = 0
            score2 = 0
            gameStatus = "PAUSED"
        }
    }
    if (gameStatus === "STARTING") {
        ctx.font = "15px Arial"
        ctx.textAlign = "center"
        ctx.fillStyle = "white"
        ctx.fillText("Premi le frecce direzionali per muovere il giocatore in basso, usa A, D per quello in alto", canvas.width / 2, canvas.height / 2)
    }
    requestAnimationFrame(gameLoop)
}

init()

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"
    ball.reset()
    gameStatus = "PLAYING"
})
