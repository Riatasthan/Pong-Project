const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

let ballX = canvas.width / 2;
let ballY = canvas.height /2;
let ballSpeedX = 5;
let ballSpeedY = 5;

let player1Score = 0;
let player2Score = 0;

function draw() {
    // Background
    ctx.fillStyle ='#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ball
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI *2);
    ctx.fill();

    // Score

    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(player1Score + ' - ' + player2Score, canvas.width / 2, 50);
}