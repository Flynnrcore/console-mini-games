import startGameplay from '../index.js';
import generateRandomNumber, { getGreatestCommonDivisor } from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(2, 100);
  const secondNumber = generateRandomNumber(2, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGreatestCommonDivisor(firstNumber, secondNumber);

  const result = [question, answer];
  return result;
};

const startingGCDGame = () => {
  startGameplay(description, getQuestionAndAnswer);
};

export default startingGCDGame;
