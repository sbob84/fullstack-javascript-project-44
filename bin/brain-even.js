#!/usr/bin/env node

import readlineSync from 'readline-sync';
import GetNameAndGreet from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const user = GetNameAndGreet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let j = 0;
for (let i = 0; i < 3; i++) {
  const number = Math.floor(Math.random() * 100);
  const correct = number & 0x1 ? 'no' : 'yes';
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  if ((number & 0x1) ^ (answer === 'yes')) {
    j++;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correct}\nLet's try again, ${user}`);
    break;
  }
}

if (j === 3) {
  console.log(`Congratulations, ${user}!`);
}
