import { gameLogic, random } from '../index.js';

const gameCondicions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomizeExpressions = () => random(1, 19);

const correctAnswer = (number) => {
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

const primeGame = () => {
  gameLogic(gameCondicions, randomizeExpressions, correctAnswer);
};

export default primeGame;
