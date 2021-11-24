/** @format */

let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");

const color = document.getElementById("col");
canvas.width = 500;
canvas.height = 500;
let x = 0;
let y = 0;
let isDrawing = false;
let mar = 5;

const plus = () => {
  if (mar < 20) mar += 5;
};

const minus = () => {
    if (mar > 5) mar -= 5;
  };

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1,x2, y2 ) {
  ctx.beginPath();

//   ctx.strokeStyle = `${color.value}`;
//   ctx.lineWidth = `${mar}`;
  
  ctx.arc(x1, y1, `${mar}`, 0, 2 * Math.PI);
  ctx.fillStyle = `${color.value}`;
  ctx.fill()
 
  
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
  
  ctx.closePath();
}
