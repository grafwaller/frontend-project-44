import getGame from '../index.js';

import generateRandomNumber from '../getrandom.js';

const getGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return getGcd(y, x % y);
};

const description = 'Find the greatest common divisor of given numbers.'; // задача игры

const getAndwerAndQuestion = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const answer = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, answer];
};

export default () => {
  getGame(description, getAndwerAndQuestion);
};
