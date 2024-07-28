// Initial data
let currentColor = "black";
let canvas = document.querySelector("#tela");
let context = canvas.getContext("2d");
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

// Events
document.querySelectorAll(".colorArea .color").forEach((item) => {
    item.addEventListener("click", colorClickEvent);
});
canvas.addEventListener("mousedown", mouseDownEvent);
canvas.addEventListener("mousemove", mouseMoveEvent);
canvas.addEventListener("mouseup", mouseUpEvent);
document.querySelector(".clear").addEventListener("click", clearCanvas);
// Functions
function colorClickEvent(event) {
    let color = event.target.getAttribute("data-color");
    currentColor = color;

    document.querySelector(".color.active").classList.remove("active");
    event.target.classList.add("active");
}
function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
}
function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }
}
function mouseUpEvent() {
    canDraw = false;
}
function draw(x, y) {
    let pointX = x - canvas.offsetLeft;
    let pointY = y - canvas.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}
function clearCanvas() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height); // limpa da posicao 0,0 ate o fim do canvas
}
