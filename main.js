const choices = document.querySelectorAll('.choice');
const winner = document.querySelector('.winner');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let cmpChoice = random();
        
        if (cmpChoice === 'Rock' && choice.classList.contains('paper')) winner.innerHTML = 'You won. Paper wins Rock!!';
        if (cmpChoice === 'Scissors' && choice.classList.contains('rock')) winner.innerHTML = 'You won. Rock wins Scissors!!';
        if (cmpChoice === 'Paper' && choice.classList.contains('scissors')) winner.innerHTML = 'You won. Scissors wins Paper!!';
        
        if (cmpChoice === 'Rock' && choice.classList.contains('scissors')) winner.innerHTML = 'You Lost. Rock wins Scissors!!';
        if (cmpChoice === 'Scissors' && choice.classList.contains('paper')) winner.innerHTML = 'You Lost. Scissors wins Paper!!';
        if (cmpChoice === 'Paper' && choice.classList.contains('rock')) winner.innerHTML = 'You Lost. Paper wins Rock!!';
        
        if (cmpChoice === 'Rock' && choice.classList.contains('rock')) winner.innerHTML = 'Tie';
        if (cmpChoice === 'Scissors' && choice.classList.contains('scissors')) winner.innerHTML = 'Tie';
        if (cmpChoice === 'Paper' && choice.classList.contains('paper')) winner.innerHTML = 'Tie';
    });
});

function random() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = '';
    switch (random) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
        default:
            computerChoice = '';
    }
    return computerChoice;
}
