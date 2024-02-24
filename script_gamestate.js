/**
 * Game
 */
const game = {
    leftScore: 0,
    rightScore: 0,
    turn: 0,
    topScore: 5,
    speedIncreaseHit: 3,
}

const keyPressed = {
    W: false,
    S: false,
    Up: false,
    Down: false
}

let activated = true;
let hits = 0;

/**
 * Key Listeners
 */
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (code === 'KeyS') {
        keyPressed['S'] = true;
    }
    if (code === 'KeyW') {
        keyPressed['W'] = true;
    }
    if (code === 'ArrowUp') {
        keyPressed['Up'] = true;
    }
    if (code === 'ArrowDown') {
        keyPressed['Down'] = true;
    }
},false);



document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;

    if (code === 'KeyS'){
    keyPressed['S'] = false;
}
if (code === 'KeyW') {
    keyPressed['W'] = false;
}
if (code === 'ArrowUp') {
    keyPressed['Up'] = false;
}
if (code === 'ArrowDown') {
    keyPressed['Down'] = false;
}

}, false);