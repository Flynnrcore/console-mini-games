import startGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => (number1 !== 0 ? getGCD(number2 % number1, number1) : number2);

const generateRound = () => {
  const number1 = generateRandomNumber(2, 100);
  const number2 = generateRandomNumber(2, 100);

  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);

  return [question, String(answer)];
};

const startGCDGame = () => {
  startGameplay(description, generateRound);
};

export default startGCDGame;
