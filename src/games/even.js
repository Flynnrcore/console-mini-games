import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionNumber = generateRandomNumber(1, 99);
  const answer = questionNumber % 2 === 0 ? 'yes' : 'no';

  const result = [questionNumber, answer];
  return result;
};

const startingEvenGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingEvenGame;
