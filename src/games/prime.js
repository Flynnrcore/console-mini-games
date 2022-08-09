import startGameplay from '../index.js';
import generateRandomNumber, { isPrime } from '../lib.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 19);
  const answer = isPrime(question);

  const result = [question, answer];
  return result;
};

const startingPrimeGame = () => {
  startGameplay(description, getQuestionAndAnswer);
};

export default startingPrimeGame;
