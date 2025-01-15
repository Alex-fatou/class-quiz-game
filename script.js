const questions = [ 
    `What is the capital of Japan?
a. Seoul
b. Tokyo
c. Beijing
d. Bangkok`,

    `What is 5 × 6?
a. 28
b. 30
c. 32
d. 35`,

    `Which planet is known as the Red Planet?
a. Venus
b. Mars 
c. Jupiter
d. Mercury`,

    `What is the largest mammal?
a. African Elephant
b. Blue Whale
c. Giraffe
d. Great White Shark`,

    `Which language is primarily spoken in Brazil?
a. Spanish
b. Portuguese
c. French
d. Italian`,

    `How many continents are there?
a. 5
b. 6
c. 7
d. 8`,

    `What is the freezing point of water?
a. 0°C
b. 10°C
c. -10°C
d. 100°C`,

    `Which organ is responsible for pumping blood in the human body?
a. Liver
b. Lungs
c. Heart
d. Brain`,

    `What is the square root of 81?
a. 7
b. 8
c. 9
d. 10`,

    `What is the chemical symbol for water?
a. O2
b. H2O
c. CO2
d. HO2`
];

const answers = [ 
    'b',
    'b',
    'b',
    'b',
    'b',
    'c',
    'a',
    'c',
    'c',
    'b'
];

// Ask player name
const username = prompt("Please enter your name:");

// score player
let score = 0;

for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i]);

    if (userAnswer === answers[i]) {
        score += 100;
    }
}






// BONUS 
const bonusQuestion = `
BONUS QUESTION DOUBLE OR LOSE EVERYTHING!
Which programming language can work either on Frontend or Backend side?
a. Java
b. JavaScript
c. Python
d. PHP`;

const bonusanswers = [ 
    'b'
];


if (score = '1000') { 
    
}










// Final message
alert(`Thank you for playing, ${username}. Your final score is ${score} euros!`);
