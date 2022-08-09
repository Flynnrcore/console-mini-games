import startGameplay from '../index.js';
import generateRandomNumber, { getCalculationExpression } from '../lib.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 25);
  const secondNumber = generateRandomNumber(1, 25);
  const operands = ['+', '-', '*'];
  const operand = operands[generateRandomNumber(0, operands.length - 1)];

  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const answer = getCalculationExpression(firstNumber, secondNumber, operand);

  const result = [question, answer];
  return result;
};

const startingCalculationGame = () => {
  startGameplay(description, getQuestionAndAnswer);
};

export default startingCalculationGame;
