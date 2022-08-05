import readlineSync from 'readline-sync';

const gameLogic = (gameCondicions, expressions, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const nameOfPlayer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameOfPlayer}!`);

  console.log(gameCondicions);

  let winCount = 1;

  for (let i = 0; i < expressions.length; i += 1) {
    const questionForm = `Question: ${expressions[i]}`;
    console.log(questionForm);

    const answerOfPlayer = readlineSync.question('Your answer: ');

    if (answerOfPlayer !== correctAnswer[i]) {
      console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'. Let's try again, ${nameOfPlayer}!`);
      return winCount = 0;
  }
    console.log('Correct!');
}
  const congratulations = `Congratulations, ${nameOfPlayer}!`;
  if (winCount === 1) {
    console.log(congratulations);
  }
};

export default gameLogic;