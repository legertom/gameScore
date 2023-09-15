let score = [0, 0];

function addPoint(player) {
    score[player-1]++;
    document.getElementById(`player${player}-score`).innerText = score[player-1];
}

function reset() {
    score = [0, 0];
    document.getElementById('player1-score').innerText = '0';
    document.getElementById('player2-score').innerText = '0';
}