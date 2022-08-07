import readlineSync from 'readline-sync';

const gameLogic = (gameCondicions, expressions, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const nameOfPlayer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameOfPlayer}!`);

  console.log(gameCondicions);

  let winCount = 1;

  for (let i = 0; i < 3; i += 1) {
    const expressionForQuestion = expressions();
    const questionForm = `Question: ${expressionForQuestion}`;
    console.log(questionForm);

    const answerOfPlayer = readlineSync.question('Your answer: ');

    if (answerOfPlayer !== correctAnswer(expressionForQuestion)) {
      console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer(expressionForQuestion)}'. Let's try again, ${nameOfPlayer}!`);
      winCount = 0;
      return winCount;
    }
    console.log('Correct!');
  }
  const congratulations = `Congratulations, ${nameOfPlayer}!`;
  if (winCount === 1) {
    console.log(congratulations);
  }
};

export default gameLogic;
