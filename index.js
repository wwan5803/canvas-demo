function drawShape() {
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.fillRect(20, 20, 100, 100);
    ctx.strokeRect(10,10,120,120)
    ctx.clearRect(45,45,50,50);

    ctx.fillStyle = "red"; //filled green for inner content
    ctx.lineWidth = 1; // 1px width of outline
    ctx.strokeStyle = "rgb(0, 50, 200)"; //filled red for outline
    ctx.beginPath();
    ctx.moveTo(75,0);
    ctx.lineTo(150,100);
    ctx.lineTo(75, 200);
    ctx.lineTo(0,100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


}
