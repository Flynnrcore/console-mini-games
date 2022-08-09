const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getCalculationExpression = (firstNumber, secondNumber, operand) => {
  let result = 0;
  switch (operand) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error('Unknown operand!');
  }
  return String(result);
};

export const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let result = 0;
  const maxNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = String(i);
    }
  }
  return result;
};

export const isPrime = (number) => {
  let result = number !== 1 ? 'yes' : 'no';

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = 'no';
    }
  }
  return result;
};

export const getProgression = (startNumber, numberStep, progressionSize) => {
  const result = [`${startNumber}`];
  let number = startNumber;
  for (let i = 0; i < progressionSize; i += 1) {
    number += numberStep;
    result.push(`${number}`);
  }
  return result;
};

export default generateRandomNumber;
