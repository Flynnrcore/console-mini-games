import startGameplay from '../index.js';
import generateRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];

  for (let count = 0; count < length; count += 1) {
    result.push(`${start + (step * count)}`);
  }
  return result;
};

const generateRound = () => {
  const startNumber = generateRandomNumber(1, 25);
  const numberStep = generateRandomNumber(2, 10);
  const progressionLength = generateRandomNumber(5, 10);

  const question = getProgression(startNumber, numberStep, progressionLength);

  const randomIndex = generateRandomNumber(1, question.length - 1);

  const answer = String(question[randomIndex]);
  question[randomIndex] = '..';

  const result = [question.join(' '), answer];
  return result;
};

const startProgressionGame = () => {
  startGameplay(description, generateRound);
};

export default startProgressionGame;
