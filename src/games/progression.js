import startGameplay from '../index.js';
import generateRandomNumber, { getProgression } from '../lib.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const startNumber = generateRandomNumber(1, 25);
  const numberStep = generateRandomNumber(2, 10);
  const progressionSize = generateRandomNumber(5, 10);

  const question = getProgression(startNumber, numberStep, progressionSize);

  const randomIndex = generateRandomNumber(3, progressionSize);

  const answer = String(question[randomIndex]);
  question[randomIndex] = '..';

  const result = [question.join(' '), answer];
  return result;
};

const startingProgressionGame = () => {
  startGameplay(description, getQuestionAndAnswer);
};

export default startingProgressionGame;
