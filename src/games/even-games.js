import { gameLogic, random } from '../index.js';

const gameCondicions = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomizeExpressions = () => random(1, 99);

const correctAnswer = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';

  return result;
};

const evenGame = () => {
  gameLogic(gameCondicions, randomizeExpressions, correctAnswer);
};

export default evenGame;
