import gameLogic from '../index.js';

const evenGame = () => {
const gameCondicions = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbersForGame = [15, 6, 7];
const correctAnswer = (numbersArray) => { 
    const answerArray = [];
    for (const items of numbersArray) {
        answerArray.push(items % 2 === 0 ? 'yes' : 'no');
    }
    return answerArray;
};



gameLogic(gameCondicions, numbersForGame, correctAnswer(numbersForGame));

};

export default evenGame();