// Creates the fruit
function Fruit() {
    this.x;
    this.y;

    // Randomises location of fruit
    this.pickLocation = function () {
        this.x = (Math.floor(Math.random() * rows -1 ) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns -1 ) + 1) * scale;
    }
    
    // Draws fruit
    this.draw = function () {
        ctx.fillStyle = "#ec2707";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}