'use strict';

//#Choosing game mode
function hideModes() {
    document.querySelector('.modes').classList.add('hidden');
    document.querySelector('.left').classList.remove('hidden');
    document.querySelector('.right').classList.remove('hidden');
    document.querySelector('.again').classList.remove('hidden');
}
let highestVal = 0;
const betweenMessage = document.getElementById('bw');


//Confiuring noob, pro and god buttons
document.querySelector('.noob').addEventListener('click', function () {
    hideModes();
    highestVal = 20;
    betweenMessage.classList.remove('hidden');
});

document.querySelector('.pro').addEventListener('click', function () {
    hideModes();
    highestVal = 50;
    betweenMessage.classList.remove('hidden');
    betweenMessage.textContent = `(Between 1 and 50)`;
    betweenMessage.style.color = 'yellow';
});
document.querySelector('.god').addEventListener('click', function () {
    hideModes();
    highestVal = 100;
    betweenMessage.classList.remove('hidden');
    betweenMessage.textContent = `(Between 1 and 100)`;
    betweenMessage.style.color = 'red';
});




let secretNumber = Math.trunc(Math.random() * highestVal) + 1;
let score = 20;
let highscore = 0;
function displayMessage(str) {
    document.querySelector('.message').textContent = str;
}

function callback() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);

    //when there is no input
    if (!guess) {
        displayMessage(`🚫 No number!`);
    }
    //when player wins
    else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Number!`);
        document.querySelector('.number').textContent = secretNumber;

        //setting the high score
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        //changing the background colour
        document.querySelector('body').style.backgroundColor = '#60b347';

        //changing the width of the number button
        document.querySelector('.number').style.width = '30rem'
    }
    //when guess is high or low
    else {
        displayMessage((guess > secretNumber) ? `📈 Too high!` : `📉 Too low!`);

        document.querySelector('.score').textContent = --score;

        if (score <= 0) {
            document.querySelector('.score').textContent = 0;
            displayMessage(`💥 You lost the game!`);

            document.querySelector('body').style.backgroundColor = '#800000';
        }
    }

}
document.querySelector('.check').addEventListener('click', callback);
document.querySelector('.check') / addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Enter') {
        callback();
    }
});

//Coding challange #1
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.modes').classList.toggle('hidden');
    document.querySelector('.left').classList.toggle('hidden');
    document.querySelector('.right').classList.toggle('hidden');
    document.querySelector('.again').classList.toggle('hidden');

    betweenMessage.classList.toggle('hidden');


    //
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * highestVal) + 1;

    displayMessage(`Start guessing...`);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
})