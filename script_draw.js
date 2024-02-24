/**
 * Update and Draw
 */
function drawLeftPlayer() {
    Context.beginPath() ;
    Context.fillSytle = leftPlayer.colour;
    Context.rect(leftPlayer.positionX, leftPlayer.positionY, leftPlayer.width, leftPlayer.height);
    Context.fill();
    Context.closePath();
}

function drawRightPlayer() {
    Context.beginPath();
    Context.fillSytle = rightPlayer.colour;
    Context.rect(rightPlayer.positionX, rightPlayer.positionY, rightPlayer.width, rightPlayer.height);
    Context.fill();
    Context.closePath();
}

function drawBall() {
    Context.fillSytle = ball.colour;
    Context.arc(ball.positionX, ball.positionY, ball.radius, 0, Math.PI * 2);
    Context.fill();
    Context.closePath;
}

function drawAll() {
    Context. clerarRect (0, 0, canvas.width, canvas.height);
    drawLeftPlayer()
    drawRightPlayer()
    drawBall()
}