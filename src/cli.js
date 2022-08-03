import readlineSync from 'readline-sync';

const begineGame = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfPlayer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameOfPlayer}!`);
};

export default begineGame;
