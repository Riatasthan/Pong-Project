function updateKeyPresses() {
    if (keyPressed['W']) {
        if (leftPlayer.positionY > 0) {
            leftPlayer.positionY -= leftPlayer.speed;
        }
    }
    if (keyPressed['S']) {
        if (leftPlayer.positionY < canvas.height - leftPlayer.height) {
            leftPlayer.positionY += leftPlayer.speed;
        }
    }
    if (keyPressed['Up']) {
        if (rightPlayer.positionY > 0) {
            rightPlayer.positionY -= rightPlayer.speed;
        }
    }
    if (keyPressed['Down']) {
        if (rightPlayer.positionY < canvas.height - rightPlayer.height) {
            rightPlayer.positionY += rightPlayer.speed;
        }
    }
}