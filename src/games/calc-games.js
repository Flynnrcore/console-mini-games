import gameLogic from '../index.js';

const calculationGame = () => {
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
      console.log(item[2]);
      switch (item) {
        case item[2] === '+':
          result = +item[0] + (+itemArr[4]);
        case item[2] === '-':
          result = +itemArr[0] - (+itemArr[4]);
        case item[2] === '*':
          result = +itemArr[0] * (+itemArr[4]);
      }
      answerArray.push(String(result));
    }
    return answerArray;
};

console.log(correctAnswer(numbersForGame));

gameLogic(gameCondicions, numbersForGame, correctAnswer(numbersForGame));

};

export default calculationGame;


