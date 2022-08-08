import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(2, 100);
  const secondNumber = generateRandomNumber(2, 100);

  const question = `${firstNumber} ${secondNumber}`;

  let answer = 0;
  const maxNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      answer = String(i);
    }
  }

  const result = [question, answer];
  return result;
};

const startingGCDGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingGCDGame;
