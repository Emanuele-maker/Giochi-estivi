/*Flappy Bird (Codice sorgente) */

/* 
 * Questo gioco è un clone di Flappy Bird. Ho deciso di ricrearlo per imparare meccaniche più avanzate come la generazione casuale e procedurale dei tubi, il controllo dell'orario corrente e un sistema di input più intuitivo
 */


//l'oggeto che controlla lo sfondo. Ho usato una funzione che "prende" l'orario corrente da quello di sistema e cambia l'immagine di sfondo a seconda dell'ora corrente
class Background {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.sprites = [
            document.getElementById("bgDay"),
            document.getElementById("bgNight")
        ];
        this.dayBg = this.sprites[0];
        this.nightBg = this.sprites[1];
        this.position = { x: 0, y: 0 };
        this.scale = { width: this.gameWidth, height: this.gameHeight };
        this.status = "";
    }
    checkStatus() {
        let date = new Date();
        let currentHour = date.getHours();
        switch (true) {
            case (currentHour > 0 && currentHour < 6) ||
            currentHour > 20:
                this.status = "night";
                break;
            case currentHour >= 6 && currentHour <= 21:
                this.status = "day";
                break;
            default:
                break;
        }
    }
    draw(ctx) {
        switch (this.status) {
            case "day":
                ctx.drawImage(
                    this.dayBg,
                    this.position.x,
                    this.position.y,
                    this.scale.width,
                    this.scale.height
                );
                break;
            case "night":
                ctx.drawImage(
                    this.nightBg,
                    this.position.x,
                    this.position.y,
                    this.scale.width,
                    this.scale.height
                );
                break;
            default:
                break;
        }
    }
}

//un oggetto che gestisce le azioni in input dell'utente, che in questo caso possono essere la pressione della barra spaziatrice, quella del tasto sinistro del mouse e quella di un dito (su un dispositivo dotato di touchscreen)

class InputHandler {
    constructor() {
        this.currentKey = 0;
        this.isTouching = false;
        document.addEventListener("keydown", (event) => {
            this.currentKey = event.keyCode;
            this.lastKey = 0;
        });
        document.addEventListener("keyup", (event) => {
            this.currentKey = 0;
            this.lastKey = event.keyCode;
            this.date = new Date();
            this.startingSec = this.date.getSeconds();
            if (1 - this.startingSec === 0) {
                this.lastKey = 0;
            }
        });
        document.addEventListener("touchstart", (event) => {
            this.isTouching = true;
        });
        document.addEventListener("touchend", (event) => {
            this.isTouching = false;
        });
        document.addEventListener("mousedown", (event) => {
            this.isTouching = true;
        });
        document.addEventListener("mouseup", (event) => {
            this.isTouching = false;
        });
    }
    keyPressed(key) {
        if (this.currentKey === key) {
            return true;
        }
        return false;
    }
    anyKeyPressed() {
        if (this.currentKey !== 0) {
            return true;
        }
        return false;
    }
    keyReleased(key) {
        if (this.lastKey === key) {
            return true;
        }
        return false;
    }
    anyKeyReleased() {
        if (this.lastKey !== 0) {
            return true;
        }
        return false;
    }
}

//La classe che rappresenta il giocatore che avrà la meccanica della collisione con gli altri oggetti e con lo "schermo"

class Flappy {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.animation = {
            midflap: document.getElementById("midflap"),
            downFlap: document.getElementById("downflap"),
            upFlap: document.getElementById("upflap")
        };
        this.position = { x: this.gameWidth / 2 - 170, y: this.gameHeight / 2 };
        this.speed = { x: 0, y: 0 };
        this.status = "spawned";
        this.upFlap = true;
    }
    draw(ctx) {
        switch (true) {
            case this.status === "spawned":
                ctx.drawImage(
                    this.animation.midflap,
                    this.position.x,
                    this.position.y,
                    40,
                    40
                );
                break;
            case this.status === "jumping":
                ctx.drawImage(
                    this.animation.upFlap,
                    this.position.x,
                    this.position.y,
                    40,
                    40
                );
                break;
            case this.status === "falling":
                ctx.drawImage(
                    this.animation.downFlap,
                    this.position.x,
                    this.position.y,
                    40,
                    40
                );
                break;
            default:
                break;
        }
    }
    update() {
        if (this.speed.y > 0.3) {
            this.status = "falling";
        }
    }
    jump() {
        this.speed.y -= 1;
        this.status = "jumping";
    }
    upFlap() {
        this.status = "jumping";
    }
    downFlap() {
        this.status = "falling";
    }
}

//Questa è la classe rappresentante del tubo, che nascerà in modo puramente casuale ogni volta che il tubo precedente esce dall schermo

class Tube {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.distance = 150;
        this.costraint = 140;
        this.speed = 0;
        this.rndS = Math.floor(Math.random() * (this.gameHeight - this.distance));
        this.up = {
            sprite: document.getElementById("tubeUp"),
            scale: {
                width: 70,
                height: this.rndS
            },
            position: {
                x: 105 + this.gameWidth - 100,
                y: this.gameHeight - this.rndS
            }
        };
        this.down = {
            sprite: document.getElementById("tubeDown"),
            position: { x: this.up.position.x, y: 0 },
            scale: {
                width: 70,
                height: this.gameHeight -
                    this.up.scale.height -
                    (this.distance + this.costraint)
            }
        };
        this.rnd = Math.random();
        if (this.rnd === 0) {
            this.up.scale.height += this.distance;
        } else {
            this.down.scale.height += this.distance;
        }
    }
    draw(ctx) {
        ctx.drawImage(
            this.up.sprite,
            this.up.position.x,
            this.up.position.y,
            this.up.scale.width,
            this.up.scale.height
        );
        ctx.drawImage(
            this.down.sprite,
            this.down.position.x,
            this.down.position.y,
            this.down.scale.width,
            this.down.scale.height
        );
    }
    update() {
        this.up.position.x -= this.speed;
        this.down.position.x -= this.speed;
        this.speed += 0.3;
        this.speed *= 0.9;
    }
}

//Un semplice oggetto che fa vedere un' immagine che spiega come giocare

class Tutorial {
    constructor(gameWidth, gameHeight, flappy) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.sprite = document.getElementById("tutorial");
        this.scale = 250;
        this.flappy = flappy;
        this.position = {
            x: this.gameWidth / 2 - this.scale / 2,
            y: this.gameHeight / 2 - this.scale / 2
        };
        this.able = true;
    }
    draw(ctx) {
        if (this.able) {
            ctx.drawImage(
                this.sprite,
                this.position.x,
                this.position.y,
                this.scale,
                this.scale
            );
        }
    }
}


//dichiarazioni di variabili globali
let canvas, ctx, GAME_WIDTH, GAME_HEIGHT, bg, flappy, input, tube, tubes, tutorial, score, best, status, aleradyAdded

//inializzazione del gioco

function init() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    GAME_WIDTH = (canvas.width = 550);
    GAME_HEIGHT = (canvas.height = window.innerHeight - 20);
    bg = new Background(GAME_WIDTH, GAME_HEIGHT);
    flappy = new Flappy(GAME_WIDTH, GAME_HEIGHT);
    input = new InputHandler();
    tube = new Tube(GAME_WIDTH, GAME_HEIGHT);
    tubes = [tube];
    tutorial = new Tutorial(GAME_WIDTH, GAME_HEIGHT);
    score = 0;
    best = 0;
    status = "tutorial";
    aleradyAdded = false;

    gameLoop()
}


function restart() {
    score = 0;
    status = "tutorial";
    tutorial = new Tutorial(GAME_WIDTH, GAME_HEIGHT);
    flappy = new Flappy(GAME_WIDTH, GAME_HEIGHT);
    tube = new Tube(GAME_WIDTH, GAME_HEIGHT);
    tubes = [tube];
}

//il ciclo infinito che controllerà lo stato del gioco, e sulla base di esso, effettuerà il rendering dei rispettivi oggetti di ogni stato

function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    bg.checkStatus();
    bg.draw(ctx);
    if (status !== "gameover") {
        flappy.draw(ctx);
        tube.draw(ctx);
    }
    if (status === "tutorial") {
        tutorial.draw(ctx);
    }

    if (status === "tutorial" && (input.anyKeyPressed() || input.isTouching)) {
        status = "run";
        tutorial.able = false;
    }
    if (status === "run") {
        flappy.update();
        tube.update();
        tubes.forEach((tube) => {
            tube.draw(ctx);
            tube.update();
        });
        flappy.position.y += flappy.speed.y;
        flappy.speed.y += 0.3;
        flappy.speed.y *= 0.95;
    }
    if (status === "run" && (input.keyPressed(32) || input.isTouching)) {
        flappy.jump();
    }
    if (tube.up.position.x <= flappy.position.x && !aleradyAdded) {
        score++;
        aleradyAdded = true;
    }
    if (aleradyAdded && tube.up.position.x > flappy.position.x) {
        aleradyAdded = false;
    }
    if (tube.up.position.x < flappy.position.x) {
        tubes.push(tube);
        tube = new Tube(GAME_WIDTH, GAME_HEIGHT);
    }
    if (
        flappy.position.y <= 0 ||
        flappy.position.y + 40 >= GAME_HEIGHT ||
        (flappy.position.x + 40 > tube.up.position.x &&
            (flappy.position.y >= tube.up.position.y ||
                flappy.position.y <= tube.down.position.y + tube.down.scale.height))
    ) {
        status = "gameover";
    }
    if (status === "gameover") {
        ctx.drawImage(
            document.getElementById("gameover"),
            GAME_WIDTH / 2 - 150,
            GAME_HEIGHT / 2 - 50 * 3,
            300,
            100
        );
        if (score >= best) {
            best = score;
        }
        ctx.fillText("score:", GAME_WIDTH / 2, GAME_HEIGHT / 2 + 20);
        ctx.fillText(score.toString(), GAME_WIDTH / 2, GAME_HEIGHT / 2 + 90);
        ctx.fillText("Best:", GAME_WIDTH / 2, GAME_HEIGHT / 2 + 160);
        ctx.fillText(best.toString(), GAME_WIDTH / 2, GAME_HEIGHT / 2 + 230);
    }
    if (status === "gameover" && (input.isTouching || input.anyKeyPressed())) {
        restart();
    }
    ctx.font = "70px flappybird";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    if (status === "run") {
        ctx.fillText(score.toString(), GAME_WIDTH / 2, 70);
    }
    requestAnimationFrame(gameLoop);
}

init()