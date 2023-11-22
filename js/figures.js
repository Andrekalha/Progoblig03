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

function drawCircle(x, y, radius, mode, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    if (mode == "outline") {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    else {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.strokeStyle = 'transparent';
        ctx.fill();
        ctx.stroke();
    }
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

function rectangleSVG(x, y, width, height, mode, color) {   
    const svg = document.getElementById("mySVG");
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    if (mode == "outline") {
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", 'transparent');
        rect.setAttribute("stroke", color);
        svg.appendChild(rect);
    }
    else {    
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", color);
        svg.appendChild(rect);
    } 
}

function triangleSVG(startposx, startposy, line1x, line1y, line2x, line2y, color) {
    const svg = document.getElementById("mySVG");
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", startposx + "," + startposy + " " + line1x + "," + line1y + " " + line2x + "," + line2y);
    triangle.setAttribute("fill", color);
    svg.appendChild(triangle);
}

function circleSVG(x, y, radius, mode, color) {
    const svg = document.getElementById("mySVG");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    if (mode == "outline") {
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", radius);
        circle.setAttribute("stroke", color);
        circle.setAttribute("fill", 'transparent');
        svg.appendChild(circle);
    }
    else {
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", radius);
        circle.setAttribute("fill", color);
        svg.appendChild(circle);  
    }
}
