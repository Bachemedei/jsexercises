// Get the canvas and set a scale of 10
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

// creates rows and columns (30 by 30)
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var fruit;

// This starts the game by calling all functions required for creating & moving snake, generating fruit etc
(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();

        // Re draw fruit if eaten
        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        // Check if snake collided with tail
        snake.checkCollision();

        //Update score
        var score = "Current Score: " + snake.total
        document.getElementById("score").innerText = score
    }, 250);
}());

// Determine which key was pressed so snake changes direction
window.addEventListener('keydown', ((event) => {
    const direction = event.key.replace('Arrow', "");
    snake.changeDirection(direction);
}))