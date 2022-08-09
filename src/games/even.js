import startGameplay from '../index.js';
import generateRandomNumber, { isEven } from '../lib.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionNumber = generateRandomNumber(1, 99);
  const answer = isEven(questionNumber);

  const result = [questionNumber, answer];
  return result;
};

const startingEvenGame = () => {
  startGameplay(description, getQuestionAndAnswer);
};

export default startingEvenGame;
