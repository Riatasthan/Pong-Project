const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 5,
    dy: 5
};

const paddleHeight = 100;
const paddleWidth = 10;
let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 10;

let upPressed = false;
let downPressed = false;
let wPressed = false;
let sPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.closePath();
}

function drawPaddles() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddles();

    // Move paddles
    if (upPressed && leftPaddleY > 0) {
        leftPaddleY -= paddleSpeed;
    }
    if (downPressed && leftPaddleY < canvas.height - paddleHeight) {
        leftPaddleY += paddleSpeed;
    }
    if (wPressed && rightPaddleY > 0) {
        rightPaddleY -= paddleSpeed;
    }
    if (sPressed && rightPaddleY < canvas.height - paddleHeight) {
        rightPaddleY += paddleSpeed;
    }

    // Ball collision with top/bottom walls
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    }

    // Ball collision with paddles
    if (ball.x + ball.dx > canvas.width - ball.radius - paddleWidth && ball.y > rightPaddleY && ball.y < rightPaddleY + paddleHeight ||
        ball.x + ball.dx < ball.radius + paddleWidth && ball.y > leftPaddleY && ball.y < leftPaddleY + paddleHeight) {
        ball.dx = -ball.dx;
    }

    // Ball out of bounds (right side)
    if (ball.x + ball.dx > canvas.width - ball.radius) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = -ball.dx;
    }

    // Ball out of bounds (left side)
    if (ball.x + ball.dx < ball.radius) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = -ball.dx;
    }

    ball.x += ball.dx;
    ball.y += ball.dy;
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === 'Up' || e.key === 'ArrowUp') {
        upPressed = true;
    }
    if (e.key === 'Down' || e.key === 'ArrowDown') {
        downPressed = true;
    }
    if (e.key === 'w' || e.key === 'W') {
        wPressed = true;
    }
    if (e.key === 's' || e.key === 'S') {
        sPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === 'Up' || e.key === 'ArrowUp') {
        upPressed = false;
    }
    if (e.key === 'Down' || e.key === 'ArrowDown') {
        downPressed = false;
    }
    if (e.key === 'w' || e.key === 'W') {
        wPressed = false;
    }
    if (e.key === 's' || e.key === 'S') {
        sPressed = false;
    }
}

setInterval(draw, 10);

