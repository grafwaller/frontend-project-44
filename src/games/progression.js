import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 10);

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

const numberOfRounds = 3;

const startGame = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const arr = progression(number1, number2);
  const index = generateRandomIndex();
  const answer = arr[index];
  arr[index] = '..';
  const questionArray = arr.join(' ');
  return [answer, questionArray];
};

const getGame = () => {
  console.log('Welkome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(taskGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [answer, questionArray] = startGame();
    console.log(`Question: ${questionArray}`);
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

export default getGame;
