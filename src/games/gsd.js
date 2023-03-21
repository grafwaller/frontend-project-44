import getGame from '../index.js';

import generateRandomNumber from '../getrandom.js';

const greatestCommonDivisor = (x, y) => {
  if (y === 0) {
    return x;
  }
  return greatestCommonDivisor(y, x % y);
};

const taskGame = 'Find the greatest common divisor of given numbers.'; // задача игры

const startGame = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const answer = greatestCommonDivisor(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
