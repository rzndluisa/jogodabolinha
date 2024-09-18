//Pegando o círculo e a área de jogo
const circle = document.getElementById('circle');
const gameArea = document.getElementById('gameArea');

let posX = 50;
let posY = 50;

const moveSpeed = 10;
const originalBackgroundColor = 'lightskyblue';

// Função que move o círculo
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            if (posY > 0)
                posY = posY - moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight) posY += moveSpeed;
            break;
        case 'ArrowLeft':
            if (posX > 0) posX -= moveSpeed;
            break;
        case 'ArrowRight':
            if (posX < window.innerWidth - circle.offsetWidth) posX += moveSpeed;
            break;
    }
    updateCirclePosition();
});
//Função que atualiza a posição da bolinha
function updateCirclePosition() {
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
}

//Função para criar quadrados
function createSquares() {
    clearShapes();
    gameArea.style.backgroundColor = 'violet';

    for (let i = 0; i < 4; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        square.style.top = `${Math.random() * (window.innerHeight - 50)} px`;
        gameArea.appendChild(square);
    }

}
// Função para criar círculos
function createCircles() {
    clearShapes();
    gameArea.style.backgroundColor = 'green';

    for (let i = 0; i < 5; i++) {
        const smallCircle = document.createElement('div');
        smallCircle.classList.add('small-circle');
        smallCircle.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
        gameArea.appendChild(smallCircle);
    }
}
// Função para limpar as formas existentes
function clearShapes(){
    const shapes = document.querySelectorAll('.square, .smallCircle');
    shapes.forEach(shape => shape.remove());
}
//Função para resetar o fundo e remover formas(botão 3)
function resetGameArea(){
    clearShapes();
    gameArea.style.backgroundColor = originalBackgroundColor;
} 
// Eventos para clicar nos botões 1, 2 e 3
document.addEventListener('keydown', (event) => {
    if (event.code === 'Digit1'){
        createSquares();
    } else if (event.code === 'Digit2'){
        createCircles();
    } else if (event.code === 'Digit3') {
        resetGameArea();
    }
    });
