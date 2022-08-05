import gameLogic from '../index.js';

const gameCondicions = 'What is the result of the expression?';

const randomizeExpressions = (numbers) => {
  const resultArray = [];
  const operandsArray = ['+', '-', '*'];
  const rand = (array) => {
    return Math.floor(Math.random() * array.length);
  }
  for (let i = 0; i < 3; i += 1) {
    resultArray.push(`${numbers[rand(numbers)]} ${operandsArray[rand(operandsArray)]} ${numbers[rand(numbers)]}`);
  }
  return resultArray;
};

const numbersForGame = randomizeExpressions([4, 10, 11, 25, 7]);

const correctAnswer = (numbersForGame) => { 
    const answerArray = [];
    let result = 0;

    for (const item of numbersForGame) {
      let itemArr = item.split(' ');
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


