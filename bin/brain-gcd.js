#!usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 100);

const greatestCommonDivisor = (x, y) => {
  if (y === 0) {
    return x;
  }
  return greatestCommonDivisor(y, x % y);
};

const taskGame = 'Find the greatest common divisor of given numbers.'; // задача игры

const numberOfRounds = 3;

const startGame = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const answer = greatestCommonDivisor(number1, number2);
  return [number1, number2, answer];
};

const getGame = () => {
  console.log('Welkome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(taskGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [number1, number2, answer] = startGame();
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
getGame();
