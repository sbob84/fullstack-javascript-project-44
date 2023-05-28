#!/usr/bin/env node

import * as cli from '../src/cli.js';

const user = cli.GetNameAndGreet('What number is missing in the progression?');

let j = 0;
for (let i = 0; i < 3; i += 1) {
  const magnifier = 1 + Math.floor(Math.random() * 10);
  const progression = [Math.floor(Math.random() * 30)];
  const iterations = 5 + Math.floor(Math.random() * 10);
  const hiddenNumIdx = Math.floor(Math.random() * iterations);
  for (let k = 1; k < iterations; k++) {
    progression[k] = progression[k - 1] + magnifier;
  }
  const questionArr = [...progression];
  questionArr[hiddenNumIdx] = '..';
  const answer = Number(cli.GetAnswer(`Question: ${questionArr.join(' ')}\nYour answer: `));
  if (cli.Check(answer === progression[hiddenNumIdx], answer, progression[hiddenNumIdx], user)) {
    j += 1;
  } else {
    break;
  }
}

if (j === 3) {
  console.log(`Congratulations, ${user}!`);
}
