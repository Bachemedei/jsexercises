function Snake() {
    // Starting co-ordinates and speed
    this.x = 0
    this.y = 0
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    // Draw snake
    this.draw = function () {
        ctx.fillStyle = "#008000"

        // Iterate through tail indexes to draw each tail
        for (var i=0; i<this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        // draw location of snake head
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    // Makes snake move & tail increase
    this.update = function() {

        // Increasing the snake tail when fruit is eaten
        for (var i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        // Move snake 
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Stop snake from leaving the box
        // If snake goes to the very right of box, make snake appear at very left
        if (this.x > canvas.width) {
            this.x = 0;
        }
        // If snake goes to the very top of box, make snake appear at very bottom
        if (this.y > canvas.height) {
            this.y = 0;
        }
        // If snake goes to the very left of box, make snake appear at very right
        if (this.x < 0) {
            this.x = canvas.width;
        }
        // If snake goes to the very bottom of box, make snake appear at very top
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    // Change direction of snake based on arrow key press
    this.changeDirection = function(direction) {
        switch(direction) {
            case "Up" :
                if (this.ySpeed !== scale) {
                    this.xSpeed = 0
                    this.ySpeed = -scale;
                }
                break;
            case "Down" :
                if (this.ySpeed !== -scale) {
                    this.xSpeed = 0
                    this.ySpeed = scale;
                }
                break;
            case "Left" :
                if (this.xSpeed !== scale) { 
                    this.xSpeed = -scale;
                    this.ySpeed = 0;
                }
                break;
            case "Right" :
                if (this.xSpeed !== -scale) { 
                    this.xSpeed = scale;
                    this.ySpeed = 0;
                }
                break;
        }
    }

    // Return true if fruit eaten and increase total
    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }
    
    this.checkCollision = function() {
        for (var i=0; i<this.tail.length; i++) {
            if (this.x === this.tail[i].x && 
                this.y === this.tail[i].y) {
                this.total = 0;
                this.tail = [];
            }
        }
    }
}
