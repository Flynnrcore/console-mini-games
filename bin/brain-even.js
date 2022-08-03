import readlineSync from 'readline-sync';
import begineGame from '../src/cli.js';

begineGame();

const gameEvenNumbers = (num) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const questionForm = console.log(`Question: ${num}`);

    questionForm;

    const answer = readlineSync.question('Your answer: ');

    console.log(answer);

    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!')
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!')
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ''. Let's try again, '')`);
    }
  };

 
  gameEvenNumbers(15);
  gameEvenNumbers(6);
  gameEvenNumbers(7);
