import gameLogic from '../index.js';

const gameCondicions = 'Find the greatest common divisor of given numbers.';

const randomizeExpressions = (numbers) => {
    const resultArray = [];
    const rand = (array) => {
      return Math.floor(Math.random() * array.length);
    };
    for (let i = 0; i < 3; i += 1) {
      resultArray.push(`${numbers[rand(numbers)]} ${numbers[rand(numbers)]}`);
    }
    return resultArray;
  };

const numbersForGame = randomizeExpressions([2, 3, 4, 8, 9, 12, 18, 24, 25, 30, 42, 48, 50, 52, 88, 100]);

console.log(numbersForGame);

const correctAnswer = (numbersOfGame) => {
  const answerArray = [];
  let result = 1;

  for (const item of numbersOfGame) {
    const itemArr = item.split(' ');
    const maxItem = itemArr[0] > itemArr[1] ? itemArr[0] : itemArr[1];
    for (let i = 2; i <= maxItem / 2; i += 1) {
        if (itemArr[0] % i === 0 && itemArr[1] % i === 0) {
            result = i;
        }
    }
    answerArray.push(String(result));
  }
  return answerArray;
};

console.log(correctAnswer(numbersForGame));

const gcdGame = () => {
  gameLogic(gameCondicions, numbersForGame, correctAnswer(numbersForGame));
};

export default gcdGame;