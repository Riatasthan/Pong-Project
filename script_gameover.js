function gameOver(){
    if(game.leftScore === game.topScore){
        console.log('Left Wins')
        sessionStorage.setItem("winner", "Left");
        window.location.href = "winner.html";
        resetGame()
    }else if(game.rightScore === game.topScore){
        console.log('Right Wins')
        sessionStorage.setItem("winner", "Right");
        window.location.href = "winner.html";
        resetGame()
    }
}