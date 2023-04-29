const gameBoard = document.getElementById('gameBoard');
const resetButton = document.getElementById('resetButton');
const moveCounter = document.getElementById('moveCounter');
const time = document.getElementById('time');
let moves = 0;
let startTime;
let timer;

function createBoard() {
    const tiles = [];
    for (let i = 1; i <= 15; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.textContent = i;
        tile.addEventListener('click', moveTile);
        tiles.push(tile);
    }
    tiles.push(null);
    return tiles;
}

function shuffleBoard(tiles) {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    return tiles;
}

function renderBoard(tiles) {
    gameBoard.innerHTML = '';
    tiles.forEach(tile => {
        if (tile) {
            gameBoard.appendChild(tile);
        } else {
            gameBoard.appendChild(document.createElement('div'));
        }
    });
}


function moveTile(e) {
    const tile = e.target;
    const index = [...gameBoard.children].indexOf(tile);
    const emptyIndex = tiles.indexOf(null);

    const [tileRow, tileCol] = [Math.floor(index / 4), index % 4];
    const [emptyRow, emptyCol] = [Math.floor(emptyIndex / 4), emptyIndex % 4];

    const distance = Math.abs(tileRow - emptyRow) + Math.abs(tileCol - emptyCol);

    if (distance === 1) {
        moves += 1;
        moveCounter.textContent = moves;
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        renderBoard(tiles);

        if (isSolved(tiles)) {
            clearInterval(timer);
            alert(`En horabuena ! encontraste la solución ${moves} desplazamientos y ${time.textContent} tiempo.`);
        }
    }
}


function isSolved(tiles) {
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] === null || parseInt(tiles[i].textContent) !== i + 1) {
            return false;
        }
    }
    return true;
}

function startTimer() {
    startTime = Date.now();
    timer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        time.textContent = elapsedTime;
    }, 1000);
}

function resetGame() {
    moves = 0;
    moveCounter.textContent = moves;
    clearInterval(timer);
    startTimer();
    tiles = shuffleBoard(tiles);
    renderBoard(tiles);
}

let tiles = createBoard();
tiles = shuffleBoard(tiles);
renderBoard(tiles);
resetButton.addEventListener('click', resetGame);
startTimer();