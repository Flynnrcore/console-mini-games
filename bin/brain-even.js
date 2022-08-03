import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const nameOfPlayer = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${nameOfPlayer}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameEvenNumbers = (num) => {
  const questionForm = `Question: ${num}`;

  console.log(questionForm);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const opociteAnswer = answer === 'yes' ? 'no' : 'yes';

  if (correctAnswer !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${opociteAnswer}'. Let's try again, ${nameOfPlayer}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const numbersForGame = [15, 6, 7];

const trhreeTries = (arrNumbers) => {
  let winCount = 1;
  const congratulations = `Congratulations, ${nameOfPlayer}!`;
  for (let i = 0; i < arrNumbers.length; i += 1) {
    if (gameEvenNumbers(arrNumbers[i]) === false) {
      winCount = 0;
      break;
    }
  }
  if (winCount === 1) {
    console.log(congratulations);
  }
};

trhreeTries(numbersForGame);
