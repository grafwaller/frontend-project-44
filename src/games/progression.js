import getGame from '../index.js';

import generateRandomNumber from '../getrandom.js';

const progression = (x, y) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr[i] = x + (y * i);
  }
  return arr;
};

const generateRandomIndex = () => {
  const index = Math.floor(Math.random() * 9);
  return index;
};

const taskGame = 'What number is missing in the progression?'; // задача игры

const startGame = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const arr = progression(number1, number2);
  const index = generateRandomIndex();
  const answer = arr[index];
  arr[index] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
