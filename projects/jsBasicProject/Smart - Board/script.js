const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clearBtn');


let isDrawing = false;
let brushColor = '#000000';
let brushWidth = 5;



canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    
});

canvas.addEventListener('mouseup', (event) => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
});

canvas.addEventListener('mouseleave', (event) => {
    isDrawing = false;
});

canvas.addEventListener('mouseenter', (event) => {
    console.log('You can draw');
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('dblclick', (event) => {
    const randomBg = `hsl(${Math.random() * 360}, 100%, 75%)`;
    canvas.style.backgroundColor = randomBg;
    // ctx.fillStyle = randomBg;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const color = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    brushColor = randomColor;
    alert(`Brush color changed to ${randomColor}`);
});
