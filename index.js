function drawShape() {
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    var img = new Image();
    img.src = './images/axis.png';
    img.onload = function(){
        ctx.drawImage(img,0,0);
        var leftMargin = 0;
        for(var i = 1; i < 10; i++){
            drawCandle(ctx, leftMargin);
            leftMargin+=30;
        }




    };

}

function drawCandle(ctx, leftMargin){
    //draw the rectangle
    ctx.beginPath();
    ctx.moveTo(100 + leftMargin,115);
    ctx.lineTo(120 + leftMargin,115);
    ctx.lineTo(120 + leftMargin,145);
    ctx.lineTo(100 + leftMargin,145);
    ctx.closePath();
    ctx.stroke();

    //draw the wick
    ctx.beginPath();
    ctx.moveTo(110 + leftMargin,145);
    ctx.lineTo(110 + leftMargin,175);
    ctx.stroke();
}
