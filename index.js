let moves = [];

function solve() {
    moves = [];
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
    moves.forEach((move, index) => {
        const disk = document.querySelector(`#${move.source} .disk`);
        const targetTower = document.getElementById(move.target);

        setTimeout(() => {
            targetTower.appendChild(disk);
        }, index * 1000); 
    });
}

document.getElementById('solve').addEventListener('click', solve);


solve();
