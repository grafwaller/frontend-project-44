import readlineSync from 'readline-sync';

import generateRandomNumber from '../getrandom.js';

const generateRandomAction = () => {
  const actions = ['+', '-', '*'];
  return actions[Math.floor(Math.random() * 3)];
};

const calculation = (number1, number2, action) => {
  switch (action) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'This can\'t be happening';
  }
};

const taskGame = 'What is the result of the expression?'; // задача игры

const numberOfRounds = 3;

const startGame = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const action = generateRandomAction();
  const answer = calculation(number1, number2, action);
  return [number1, number2, action, answer];
};

const getGame = () => {
  console.log('Welkome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(taskGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [number1, number2, action, answer] = startGame();
    console.log(`Question: ${number1} ${action} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== answer) {
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
