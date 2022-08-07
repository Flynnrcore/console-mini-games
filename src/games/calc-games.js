import { gameLogic, random } from '../index.js';

const gameCondicions = 'What is the result of the expression?';

const randomizeExpressions = () => {
  const operands = ['+', '-', '*'];
  const firstNumber = random(1, 25);
  const secondNumber = random(1, 25);
  return `${firstNumber} ${operands[random(0, 2)]} ${secondNumber}`;
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
