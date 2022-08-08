import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 99);
  const isEven = (number) => {
    const result = number % 2 === 0 ? 'yes' : 'no';
    return result;
  };

  const result = [question, isEven(question)];
  return result;
};

const startingEvenGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingEvenGame;
