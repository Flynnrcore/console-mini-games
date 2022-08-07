import gameLogic from '../index.js';

const gameCondicions = 'What number is missing in the progression?';

const randomizeExpressions = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let startNumber = random(1, 25);
  const numberStep = random(2, 10);
  const sizeProgression = random(5, 10);

  const result = [`${startNumber}`];
  for (let i = 0; i < sizeProgression; i += 1) {
    startNumber += numberStep;
    result.push(`${startNumber}`);
  }
  result[random(3, sizeProgression)] = '..';

  return result.join(' ');
};

const correctAnswer = (expressionString) => {
  let result = 0;

  const itemArr = expressionString.split(' ');
  for (let i = 1; i < itemArr.length; i += 1) {
    if (itemArr[i] === '..') {
      result = +itemArr[i - 1] + (+itemArr[i - 1] - +itemArr[i - 2]);
    }
  }
  return String(result);
};

const progressionGame = () => {
  gameLogic(gameCondicions, randomizeExpressions, correctAnswer);
};

export default progressionGame;
