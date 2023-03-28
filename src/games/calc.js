import getGame from '../index.js';

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

const description = 'What is the result of the expression?'; // задача игры

const getAndwerAndQuestion = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const action = generateRandomAction();
  const answer = calculation(number1, number2, action);
  const question = `${number1} ${action} ${number2}`;
  return [question, answer];
};

export default () => {
  getGame(description, getAndwerAndQuestion);
};
