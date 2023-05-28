#!/usr/bin/env node

import * as cli from '../src/cli.js';

const user = cli.GetNameAndGreet('Answer "yes" if the number is even, otherwise answer "no".');

let j = 0;
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 100);
  const result = number & 0x1 ? 'no' : 'yes';
  const answer = cli.GetAnswer(`Question: ${number}\nYour answer: `);

  if (cli.Check((number & 0x1) ^ (answer === 'yes'), answer, result, user)) {
    j += 1;
  } else {
    break;
  }
}

if (j === 3) {
  console.log(`Congratulations, ${user}!`);
}
