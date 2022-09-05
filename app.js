const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;    
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    const elementSize = canvasSize / 10;

    game.font = elementSize + 'px Verdana';
    game.fillText(emojis['X'], 100, 100);

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    window.innerHeight
    window.innerWidth

}