function drawRectangle(x, y, width, height, mode, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    if (mode == "outline") {
    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.rect(x, y, width, height);
    ctx.stroke();
    }
    else {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height)
    }
}

function drawCircle(x, y, radius, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.strokeStyle = 'transparent';
    ctx.fill();
    ctx.stroke();   
}

function drawTriangle(startposx, startposy, line1x, line1y, line2x, line2y, line3x, line3y, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");    

    ctx.beginPath();
    ctx.moveTo(startposx, startposy);
    ctx.lineTo(line1x, line1y);
    ctx.lineTo(line2x, line2y);
    ctx.lineTo(line3x, line3y);        
    ctx.fillStyle = color;
    ctx.strokeStyle = 'transparent';
    ctx.fill();
    ctx.stroke();

}
drawRectangle(0, 0, 500, 300, "fill", "DeepSkyBlue");
drawRectangle(0, 180, 500, 120, "fill", "RoyalBlue");
drawRectangle(0, 270, 500, 30, "fill", "green");

drawTriangle(20, 185, 250, 105, 480, 185, 20, 185, "LightSlateGray");
drawTriangle(250, 185, 400, 115, 495, 185, 300, 185, "LightSlateGray");

drawCircle(60, 60, 40, "yellow");