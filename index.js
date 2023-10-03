let moves = [];
let moveCount = 0;

function solve() {
    moves = [];
    moveCount = 0;
    const numDisks = parseInt(document.getElementById('numDisks').value);
    towerOfHanoi(numDisks, 'A', 'C', 'B');
    animateMoves();
}

function towerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
        moves.push({ source, target });
        return;
    }

    towerOfHanoi(n - 1, source, auxiliary, target);
    moves.push({ source, target });
    towerOfHanoi(n - 1, auxiliary, target, source);
}

function animateMoves() {
    let delay = 0;
    const moveList = document.getElementById('moveList');
    
    moves.forEach((move, index) => {
        const disk = document.querySelector(`#${move.source} .disk`);
        const targetTower = document.getElementById(move.target);

        setTimeout(() => {
            targetTower.appendChild(disk);
            moveCount++;
            updateMoveList(moveCount, move.source, move.target);
        }, index * 1000); // Adjust this value for the speed of animation
    });
}

function updateMoveList(moveNumber, source, target) {
    const moveList = document.getElementById('moveList');
    const listItem = document.createElement('li');
    listItem.textContent = `Move ${moveNumber}: Move a disk from ${source} to ${target}`;
    moveList.appendChild(listItem);
}

document.getElementById('towerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    solve();
});

// Initial setup with 3 disks
solve();
