import gameLogic from '../index.js';

const gameCondicions = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomizeExpressions = () => {
  const numbers = [6, 7, 12, 15, 18, 27, 33, 36, 45, 54, 77, 81, 99];
  const random = (array) => Math.floor(Math.random() * array.length);
  return numbers[random(numbers)];
};

const correctAnswer = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';

  return result;
};

const evenGame = () => {
  gameLogic(gameCondicions, randomizeExpressions, correctAnswer);
};

export default evenGame;
