import readlineSync from 'readline-sync';

const startGameplay = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const roundCounter = 3;
  for (let i = 0; i < roundCounter; i += 1) {
    const [expression, correctAnswer] = getQuestionAndAnswer();
    const questionForm = `Question: ${expression}`;
    console.log(questionForm);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  const congratulations = `Congratulations, ${name}!`;
  console.log(congratulations);
};

export default startGameplay;
