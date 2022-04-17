const canvas = document.getElementById("minecan")
const c = canvas.getContext("2d")

let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

const circle={
    x:500,
    y:200,
    size:30,
    dx: 20,
    dy:20,
}

const moveRight = ()=>{
    circle.x += circle.dx
}
const moveLeft = ()=>{
    circle.x -= circle.dx
}
const moveUp = ()=>{
    circle.y -= circle.dy
}
const moveDown = ()=>{
    circle.y += circle.dy
}


function draw(){
c.beginPath();
c.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);

c.fillStyle = 'red';

c.fill();
}


 function update()
 {
     c.clearRect(0,0,canvas.width, canvas.height)
     draw()
     
     if(circle.x<1500 && circle.x>1400 && circle.y<500&& circle.y>400)
     {
        window.location.replace("bile/index.html");


     }
c.fillStyle = 'brown'
c.fillRect(1400, 400, 150, 100)

     requestAnimationFrame(update)

 }

document.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowRight' ||e.key === 'Right')
        moveRight()
        else 
        if(e.key=== 'ArrowLeft' ||e.key=== 'Left')
        moveLeft()
        else 
        if(e.key=== 'ArrowUp' ||e.key=== 'Up')
        moveUp()
        else 
        if(e.key=== 'ArrowDown' ||e.key=== 'Down')
        moveDown()


})



document.addEventListener('keyup',()=>{
    
})

update()