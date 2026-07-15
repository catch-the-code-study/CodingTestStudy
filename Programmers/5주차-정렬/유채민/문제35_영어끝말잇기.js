// 1부터 n까지 번호가 붙어있는 n명의 사람

// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.

// 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

const n = 3;
const words = [
  "tank",
  "kick",
  "bnow",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

const people = (people, n) => {
  for (let i = 0; i <= n; i++) {
    people[i] = i + 1;
  }
};

const solution = (n, words) => {
  const peopleArr = [];
  //이미 했던 단어를 모아놓는 배열
  const alreadyWord = [words[0]];
  people(peopleArr, n);

  let currentPersonNumber;

  for (let i = 1; i < words.length; i++) {
    currentPersonNumber = (i % n) + 1;
    peopleArr[currentPersonNumber];

    let prevWordList = words[i - 1].split("");
    let currentWordList = words[i].split("");

    if (currentWordList.length === 1) {
      return [currentPersonNumber, Math.floor(i / n) + 1];
    } else if (prevWordList[prevWordList.length - 1] !== currentWordList[0]) {
      return [currentPersonNumber, Math.floor(i / n) + 1];
    } else if (alreadyWord.includes(words[i])) {
      return [currentPersonNumber, Math.floor(i / n) + 1];
    }

    alreadyWord.push(words[i]);
  }

  return [0, 0];
};

console.log(solution(n, words));
