import gameLogic from '../index.js';

const gameCondicions = 'What is the result of the expression?';

const randomizeExpressions = (numbers) => {
  const resultArray = [];
  const operandsArray = ['+', '-', '*'];
  const rand = (array) => Math.floor(Math.random() * array.length);
  for (let i = 0; i < 3; i += 1) {
    resultArray.push(`${numbers[rand(numbers)]} ${operandsArray[rand(operandsArray)]} ${numbers[rand(numbers)]}`);
  }
  return resultArray;
};

const numbersForGame = randomizeExpressions([2, 3, 4, 5, 7, 10, 12, 11, 20, 25]);

const correctAnswer = (expressionString) => {
  let result = 0;
  const itemArr = expressionString.split(' ');
  switch (itemArr[1]) {
    case '+':
      result = +itemArr[0] + +itemArr[2];
      break;
    case '-':
      result = +itemArr[0] - +itemArr[2];
      break;
    default:
      result = +itemArr[0] * +itemArr[2];
      break;
  }
  return String(result);
};

const calculationGame = () => {
  gameLogic(gameCondicions, numbersForGame, correctAnswer);
};

export default calculationGame;
