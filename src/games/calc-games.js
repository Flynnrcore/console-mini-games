import gameLogic from '../index.js';

const gameCondicions = 'What is the result of the expression?';

const randomizeExpressions = () => {
  const numbers = [2, 3, 4, 5, 7, 10, 12, 11, 20, 25];
  const operands = ['+', '-', '*'];
  const random = (array) => Math.floor(Math.random() * array.length);
  return `${numbers[random(numbers)]} ${operands[random(operands)]} ${numbers[random(numbers)]}`;
};

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
  gameLogic(gameCondicions, randomizeExpressions, correctAnswer);
};

export default calculationGame;
