const computerChoiceElement = document.getElementById('computer-choice');
const playerChoiceElement = document.getElementById('player-choice');
const resultOutputElement = document.getElementById('resultOutput');
const possibleChoices = document.querySelectorAll('button');
let player = '';
let computer = '';
let result = '';

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoiceElement.innerHTML = player;
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1)
        computer = "ROCK";
    if (randomNumber === 2)
        computer = "PAPER";
    if (randomNumber === 3) 
        computer = "SCISSORS";
    
    computerChoiceElement.innerHTML = 'Computer Choice: ' + computer;      

    determineResult();
}

function determineResult() {
    if (computer === player) {
        result = 'Gelijkspel';
    } else if ((computer === 'ROCK' && player === 'PAPER') ||
               (computer === 'PAPER' && player === 'SCISSORS') ||
               (computer === 'SCISSORS' && player === 'ROCK')) {
        result = 'Je hebt gewonnen!';
    } else {
        result = 'Je hebt verloren!';
    }

    resultOutputElement.innerHTML = 'Result: ' + result;
}
