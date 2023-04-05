const readline = require("readline");

const computerNumbers = generateComputerNumbers();

let tries = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.setPrompt("숫자 3개를 입력하세요 (중복 없이) ");
rl.prompt();
rl.on("line", (userNumbers) => {
  const result = checkNumbers(computerNumbers, userNumbers);

  tries++;
  console.log(`${tries}번째 시도 : ${userNumbers}`);
  console.log(result);

  if (result === "3S") {
    console.log(`축하합니다! ${tries}번만에 맞추셨습니다.`);
    rl.close();
  } else if (result === "0B3S") {
    console.log("3 스트라이크! 게임을 종료합니다.");
    rl.close();
  } else {
    rl.prompt();
  }
});

function generateComputerNumbers() {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

function checkNumbers(computerNumbers, userNumbers) {
  const sNumbers = [];
  const bNumbers = [];
  for (let i = 0; i < 3; i++) {
    const userNumber = Number(userNumbers[i]);
    if (computerNumbers[i] === userNumber) {
      sNumbers.push(userNumber);
    } else if (computerNumbers.includes(userNumber)) {
      bNumbers.push(userNumber);
    }
  }

  const s = sNumbers.length;
  const b = bNumbers.length;
  if (s === 0 && b === 0) {
    return "0B0S";
  }
  if (s === 3 && b === 0) {
    return "3S";
  }
  return `${b}B${s}S`;
}
