var canvas;
var ctx;
var x = 568;
var y = 262;
var mx = 2;
var my = 4;
var WIDTH = 568;
var HEIGHT = 262;

function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}

function draw() {
    clear();
    circle(x, y, 20);

    if (x + mx > WIDTH || x + mx < 0)
        mx = -mx;
    if (y + my > HEIGHT || y + my < 0)
        my = -my;

    x += mx;
    y += my;

}

init();
