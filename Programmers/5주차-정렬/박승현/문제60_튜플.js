// 튜플
// https://school.programmers.co.kr/learn/courses/30/lessons/64065
// s: "{{2},{2,1},{2,1,3},{2,1,3,4}}"
// resukt: [2, 1, 3, 4]

const solution = (s) => {
  const numbers = s
    .slice(2, -2)
    .split("},{")
    .sort((a, b) => a.length - b.length);

  const answer = [];

  for (const element of numbers) {
    const nums = element.split(",");
    for (const num of nums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
};

// 책에 있는 코드
function solution(s) {
  const numbers = s.slice(2, -2).split("},{");
  const sorted = numbers.sort((a, b) => a.length - b.length);
  const answer = [];

  for (const element of sorted) {
    const nums = element.split(",");
    for (const num of nums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
}
