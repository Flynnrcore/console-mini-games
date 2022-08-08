import readlineSync from 'readline-sync';

const startingGameplay = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswerArray = getQuestionAndAnswer();
    const questionForm = `Question: ${questionAndAnswerArray[0]}`;
    console.log(questionForm);

    const answerOfPlayer = readlineSync.question('Your answer: ');

    if (answerOfPlayer !== questionAndAnswerArray[1]) {
      console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${questionAndAnswerArray[1]}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  const congratulations = `Congratulations, ${name}!`;
  console.log(congratulations);
};

export default startingGameplay;
