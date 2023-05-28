import readlineSync from 'readline-sync';

export function GetNameAndGreet(rules) {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!\n${rules}`);
  return name;
}

export function GetAnswer(question) {
  return readlineSync.question(question);
}

export function Check(condition, answer, result, user) {
  if (condition) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}\nLet's try again, ${user}`);
  return false;
}
