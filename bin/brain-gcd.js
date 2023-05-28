#!/usr/bin/env node

import * as cli from '../src/cli.js';

function GCD(a, b) {
  if (!b) {
    return a;
  }
  return GCD(b, a % b);
}

const user = cli.GetNameAndGreet('Find the greatest common divisor of given numbers.');

let j = 0;
for (let i = 0; i < 3; i += 1) {
  const valA = Math.floor(Math.random() * 100);
  const valB = Math.floor(Math.random() * 100);
  const result = GCD(valA, valB);
  const answer = Number(cli.GetAnswer(`Question: ${valA} ${valB}\nYour answer: `));
  if (cli.Check(answer === result, answer, result, user)) {
    j += 1;
  } else {
    break;
  }
}

if (j === 3) {
  console.log(`Congratulations, ${user}!`);
}
