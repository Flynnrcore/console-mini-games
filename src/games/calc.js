import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 25);
  const secondNumber = generateRandomNumber(1, 25);
  const operands = ['+', '-', '*'];
  const operand = operands[generateRandomNumber(0, 2)];
  const question = `${firstNumber} ${operand} ${secondNumber}`;

  let answer = 0;
  switch (operand) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    default:
      answer = firstNumber * secondNumber;
      break;
  }

  const result = [question, String(answer)];
  return result;
};

const startingCalculationGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingCalculationGame;
