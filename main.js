const X = 10;
const Y = 10;
const WIDTH = 200;
const HEIGHT = 100;
const COLOR = "#000000";

let Rectangle = function () {
    this.x = X;
    this.y = Y;
    this.width = WIDTH;
    this.heigh = HEIGHT;
    this.color = COLOR;
}
Rectangle.prototype.render = function(){
    let _canvas = document.getElementById('rectangle');
    let context = _canvas.getContext("2d");
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.heigh);
        context.closePath();

}

function init (){
    let rectangle = new Rectangle();
    rectangle.render();
}
