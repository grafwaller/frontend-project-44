import getGame from '../index.js';

import generateRandomNumber from '../getrandom.js';

const getProgression = (x, y) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression[i] = x + (y * i);
  }
  return progression;
};

const generateRandomIndex = () => {
  const index = Math.floor(Math.random() * 9);
  return index;
};

const description = 'What number is missing in the progression?'; // задача игры

const getAndwerAndQuestion = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const progression = getProgression(number1, number2);
  const index = generateRandomIndex();
  const answer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  getGame(description, getAndwerAndQuestion);
};
