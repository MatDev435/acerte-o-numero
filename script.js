const gameForm = document.querySelector('#game');
const statusEl = document.querySelector('#status');
const numberEl = document.querySelector('#number');
const tryEl = document.querySelector('#try');

let valueA = 1;
let valueB = 100;
let attempts = 10;
let number = 0;

const randomNumber = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

number = randomNumber(valueA, valueB);

const restartGame = () => {
    statusEl.style.color = 'yellow';
    statusEl.innerHTML = 'Reiniciando...';

    setTimeout(() => {
        attempts = 10;
        statusEl.innerHTML = '';
        numberEl.value = '';
        numberEl.focus();
    }, 1000);
}

const tryNumber = (value) => {
    if(attempts > 0) {
        if(value === number) {
            statusEl.style.color = 'greenyellow';
            statusEl.innerHTML = 'Parabéns, você acertou!';

            setTimeout(() => {
                restartGame();
            }, 2000);
        } else if(value < number) {
            attempts -= 1;

            statusEl.style.color = 'red';
            statusEl.innerHTML = 'O número é maior.';

            numberEl.value = '';
            numberEl.focus();
        } else if(value > number) {
            attempts -= 1;

            statusEl.style.color = 'red';
            statusEl.innerHTML = 'O número é menor';

            numberEl.value = '';
            numberEl.focus();
        }
    } else {
        restartGame();
    }
}

tryEl.addEventListener('click', () => {
    const value = parseInt(numberEl.value);

    tryNumber(value);
})