import getGame from '../index.js';

import generateRandomNumber from '../getrandom.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".'; // задача игры

const getAndwerAndQuestion = () => {
  const number = generateRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(description, getAndwerAndQuestion);
};
