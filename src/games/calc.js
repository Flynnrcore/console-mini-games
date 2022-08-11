import startGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'What is the result of the expression?';

const getCalculate = (firstNumber, secondNumber, operand) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 25);
  const secondNumber = generateRandomNumber(1, 25);
  const operands = ['+', '-', '*'];
  const operand = operands[generateRandomNumber(0, operands.length - 1)];

  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const answer = getCalculate(firstNumber, secondNumber, operand);

  const result = [question, String(answer)];
  return result;
};

const startCalculationGame = () => {
  startGameplay(description, generateRound);
};

export default startCalculationGame;
