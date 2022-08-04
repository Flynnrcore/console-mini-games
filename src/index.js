import readlineSync from 'readline-sync';

const gameLogic = (gameCondicions, expressions, correctAnswer) => {
console.log('Welcome to the Brain Games!');
const nameOfPlayer = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${nameOfPlayer}!`);
console.log(gameCondicions);

const gameEvenNumbers = (expr, corrAns) => {
  const questionForm = `Question: ${expr}`;
  console.log(questionForm);

  const answerOfPlayer = readlineSync.question('Your answer: ');

  if (answerOfPlayer !== corrAns) {
    console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${corrAns}'. Let's try again, ${nameOfPlayer}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const trhreeTries = () => {
  let winCount = 1;
  const congratulations = `Congratulations, ${nameOfPlayer}!`;
  for (let i = 0; i < expressions.length; i += 1) {
    if (gameEvenNumbers(expressions[i], correctAnswer[i]) === false) {
      winCount = 0;
      break;
    }
  }
  if (winCount === 1) {
    console.log(congratulations);
  }
};

trhreeTries();
};

export default gameLogic;