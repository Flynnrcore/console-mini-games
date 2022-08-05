import gameLogic from '../index.js';

const gameCondicions = 'What is the result of the expression?';

const randomizeExpressions = (numbers) => {
  const resultArray = [];
  const operandsArray = ['+', '-', '*'];
  const rand = (array) => {
    return Math.floor(Math.random() * array.length);
  };
  for (let i = 0; i < 3; i += 1) {
    resultArray.push(`${numbers[rand(numbers)]} ${operandsArray[rand(operandsArray)]} ${numbers[rand(numbers)]}`);
  }
  return resultArray;
};

const numbersForGame = randomizeExpressions([2, 3, 4, 5, 7, 10, 12, 11, 20, 25]);

const correctAnswer = (numbersOfGame) => {
  const answerArray = [];
  let result = 0;

  for (const item of numbersOfGame) {
    const itemArr = item.split(' ');
    switch (itemArr[1]) {
      case '+':
        result = +itemArr[0] + +itemArr[2];
        break;
      case '-':
        result = +itemArr[0] - +itemArr[2];
        break;
      case '*':
        result = +itemArr[0] * +itemArr[2];
        break;
    }
    answerArray.push(String(result));
  }
  return answerArray;
};

const calculationGame = () => {
  gameLogic(gameCondicions, numbersForGame, correctAnswer(numbersForGame));
};

export default calculationGame;
