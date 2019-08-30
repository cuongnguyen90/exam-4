const X = 10;
const Y = 10;
const WIDTH = 200;
const HEIGHT = 100;
const COLOR = "#000000";

let Rectangle = function () {
    this.x = X;
    this.y = Y;
    this.width = WIDTH;
    this.height = HEIGHT;
    this.color = COLOR;
}
Rectangle.prototype.render = function(){
    let rec = document.createElement('canvas');
        rec.id = "rectangle";
        rec.width = WIDTH;
        rec.height = HEIGHT;
        document.body.appendChild(rec);
    let _canvas = document.getElementById('rectangle');
    let context = _canvas.getContext("2d");
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);
        context.closePath();

}

function init (){
    let rectangle = new Rectangle();
    rectangle.render();
}
