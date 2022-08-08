import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 19);

  const isPrime = (number) => {
    if (number === 1) {
      return 'no';
    }
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const result = [question, isPrime(question)];
  return result;
};

const startingPrimeGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingPrimeGame;
