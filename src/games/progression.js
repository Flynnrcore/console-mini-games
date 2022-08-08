import startingGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  let startNumber = generateRandomNumber(1, 25);
  const numberStep = generateRandomNumber(2, 10);
  const progressionSize = generateRandomNumber(5, 10);

  const question = [`${startNumber}`];
  for (let i = 0; i < progressionSize; i += 1) {
    startNumber += numberStep;
    question.push(`${startNumber}`);
  }

  const randomIndex = generateRandomNumber(3, progressionSize);

  const answer = String(question[randomIndex]);
  question[randomIndex] = '..';

  const result = [question.join(' '), answer];
  return result;
};

const startingProgressionGame = () => {
  startingGameplay(description, getQuestionAndAnswer);
};

export default startingProgressionGame;
