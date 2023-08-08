// without Refactoring
/*
const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winnigScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// Player One
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score
    }
})

// Player Two
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score
    }
})

// Selecting Winning Score
winnigScoreSelect.addEventListener('change', function () {
    winnigScore = parseInt(this.value);
    reset();
})

// Reset Button
resetButton.addEventListener('click', reset)

// Reset Function
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;
}
*/

// With Refactoring

const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1Display')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winnigScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScore(Player, opponent) {
    if (!isGameOver) {
        Player.score += 1;
        if (Player.score === winningScore) {
            isGameOver = true;
            Player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            Player.button.disabled = true;
            opponent.button.disabled = true;
        }
        Player.display.textContent = Player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

winnigScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset)

function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    isGameOver = false;
}


