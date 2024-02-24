/**
 * Support
 */

function updateDefault() { 
    canvas.width = Math.min(window.innerWidth * 0.6, 800)
    canvas.height = Math.min(window.innerHeight * 0.8, 600)

    ball.positionX = canvas.width / 2 + ball.radius
    ball.positionY = canvas.height / 2 + ball.radius
    
    leftPlayer.positionY = canvas.height / 2 - leftPlayer.height / 2

    rightPlayer.positionX = canvas.width - (rightPlayer.width + 10)
    
    rightPlayer.positionX = canvas.width - (rightPlayer.width + 10)
    rightPlayer.positionY = canvas.height / 2 - rightPlayer.height / 2
}

function resizeHandler() {
    if (window.innerWidth < 560) {
        document.getElementsByClassName('small-device')[0].style.display = "flex";
        document.getElementsByClassName('canvas-container')[0].style.display = "none";
    } else {
        document.getElementsByClassName('small-device')[0].style.display = "none";
        document.getElementsByClassName('canvas-container')[0].style.display = "flex";
    }

    updateDefault()
}

resizeHandler()
window.addEventListener('resize', () => { resizeHandler() })
