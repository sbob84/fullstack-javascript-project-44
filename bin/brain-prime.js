#!/usr/bin/env node

import * as cli from '../src/cli.js';

function IsPrime(number) {
  if (number <= 1) {
    return 'yes';
  }
  if (number <= 3) {
    return 'yes';
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return 'no';
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return 'no';
    }
  }
  return 'yes';
}

const user = cli.GetNameAndGreet('Answer "yes" if given number is prime. Otherwise answer "no".');

let j = 0;
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 1000);
  const result = IsPrime(number);
  const answer = cli.GetAnswer(`Question: ${number}\nYour answer: `);
  if (cli.Check(result === answer, answer, result, user)) {
    j += 1;
  } else {
    break;
  }
}

if (j === 3) {
  console.log(`Congratulations, ${user}!`);
}
