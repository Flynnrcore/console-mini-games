import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const question = `${generateRandomNumber(2, 100)} ${generateRandomNumber(2, 100)}`;

  const getGreatestCommonDivisor = (stringOfNumbers) => {
    let result = 0;
    const numbersArr = stringOfNumbers.split(' ');
    const maxNumber = +numbersArr[0] > +numbersArr[1] ? +numbersArr[0] : +numbersArr[1];
    for (let i = 1; i <= maxNumber; i += 1) {
      if (+numbersArr[0] % i === 0 && +numbersArr[1] % i === 0) {
        result = i;
      }
    }
    return String(result);
  };

  const result = [question, getGreatestCommonDivisor(question)];
  return result;
};

const startingGCDGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingGCDGame;
