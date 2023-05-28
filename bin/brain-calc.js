#!/usr/bin/env node

import * as cli from '../src/cli.js';

const user = cli.GetNameAndGreet('What is the result of the expression?');

let j = 0;
for (let i = 0; i < 3; i++) {
  const actionsArr = ['+', '-', '*'];
  const action = actionsArr[Math.floor(Math.random() * 3)];
  const valA = Math.floor(Math.random() * 100);
  const valB = Math.floor(Math.random() * 100);
  let result;
  switch (action) {
    case '+': result = valA + valB; break;
    case '-': result = valA - valB; break;
    case '*': result = valA * valB; break;
    default: result = 0; break;
  }
  const answer = Number(cli.GetAnswer(`Question: ${valA} ${action} ${valB}\nYour answer: `));
  if (cli.Check(answer === result, answer, result, user)) {
    j++;
  } else {
    break;
  }
}

if (j === 3) {
  console.log(`Congratulations, ${user}!`);
}
