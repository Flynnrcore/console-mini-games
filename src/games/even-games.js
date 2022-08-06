import gameLogic from '../index.js';

const gameCondicions = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbersForGame = [15, 6, 7];
const correctAnswer = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';

  return result;
};

const evenGame = () => {
  gameLogic(gameCondicions, numbersForGame, correctAnswer);
};

export default evenGame;
