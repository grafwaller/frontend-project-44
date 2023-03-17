import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 10);

const isEven = (number) => number % 2 === 0;

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".'; // задача игры

const numberOfRounds = 3;

const startGame = () => {
  const number = generateRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const getGame = () => {
  console.log('Welkome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(taskGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
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
