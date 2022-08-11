import startGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let result = 0;
  const maxNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(2, 100);
  const secondNumber = generateRandomNumber(2, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGreatestCommonDivisor(firstNumber, secondNumber);

  const result = [question, String(answer)];
  return result;
};

const startGCDGame = () => {
  startGameplay(description, generateRound);
};

export default startGCDGame;
