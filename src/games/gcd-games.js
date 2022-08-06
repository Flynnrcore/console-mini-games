import gameLogic from '../index.js';

const gameCondicions = 'Find the greatest common divisor of given numbers.';

const randomizeExpressions = (numbers) => {
  const resultArray = [];
  const rand = (array) => Math.floor(Math.random() * array.length);

  for (let i = 0; i < 3; i += 1) {
    resultArray.push(`${numbers[rand(numbers)]} ${numbers[rand(numbers)]}`);
  }
  return resultArray;
};

const numbersForGame = randomizeExpressions([4, 6, 8, 9, 12, 18, 24, 25, 30, 42, 48, 50, 100]);

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
  gameLogic(gameCondicions, numbersForGame, correctAnswer);
};

export default gcdGame;
