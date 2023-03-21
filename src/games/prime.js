import getGame from '../index.js';

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

const startGame = () => {
  const number = generateRandomNumber();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
