import readlineSync from 'readline-sync';

import generateRandomNumber from '../getrandom.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // задача игры

const numberOfRounds = 3;

const startGame = () => {
  const number = generateRandomNumber();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const getGame = () => {
  console.log('Welkome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(taskGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGame;
