function resetBall() {
    ball.positionX = canvas.width / 2 + 8
    ball.positionY = canvas.height / 2 + 8

    let velocityX = ball.velocityX
    let velocityY = ball.velocityY

    ball.velocityX = 0
    ball.velocityY = 0

    setTimeout(() => {
        ball.velocityX = -velocityX
        ball.velocityY = -velocityY
    }, 1000)
}


function setScore() {
    if (ball.positionX > canvas.width - (rightPlayer.width)) {
        game.leftScore++
        resetBall()
    } else if (ball.positionX < rightPlayer.width) {
        game.rightScore++
        resetBall()
    }

    document.getElementsByClassName('left')[0].textContent = game.leftScore
    document.getElementsByClassName('right')[0].textContent = game.rightScore
}


function resetGame(){
    game.leftScore = 0
    game.rightScore = 0
    ball.positionX = 0
    ball.positionY = 0
    updateDefault()
}