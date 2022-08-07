import { gameLogic, random } from '../index.js';

const gameCondicions = 'Find the greatest common divisor of given numbers.';

const randomizeExpressions = () => `${random(2, 100)} ${random(2, 100)}`;

const correctAnswer = (expressionString) => {
  let result = 0;

  const itemArr = expressionString.split(' ');
  const maxItem = +itemArr[0] > +itemArr[1] ? +itemArr[0] : +itemArr[1];
  for (let i = 1; i <= maxItem; i += 1) {
    if (+itemArr[0] % i === 0 && +itemArr[1] % i === 0) {
      result = i;
    }
  }

  return String(result);
};

const gcdGame = () => {
  gameLogic(gameCondicions, randomizeExpressions, correctAnswer);
};

export default gcdGame;
