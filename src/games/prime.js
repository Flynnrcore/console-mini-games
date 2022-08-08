import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionNumber = generateRandomNumber(1, 19);

  let answer = 'yes';
  if (questionNumber === 1) {
    answer = 'no';
  }
  for (let i = 2; i <= questionNumber / 2; i += 1) {
    if (questionNumber % i === 0) {
      answer = 'no';
    }
  }

  const result = [questionNumber, answer];
  return result;
};

const startingPrimeGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingPrimeGame;
