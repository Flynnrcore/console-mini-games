import startGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateRound = () => {
  const question = generateRandomNumber(1, 19);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startPrimeGame = () => {
  startGameplay(description, generateRound);
};

export default startPrimeGame;
