// k번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// array: [1, 5, 2, 6, 3, 7, 4]
// commadns: [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// return: [5, 6, 3]

const solution = (array, commands) => {
  const result = commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1],
  );

  return result;
};

// 책에 있는 코드
function solution(array, commands) {
  const answer = [];
  for (const command of commands) {
    const [i, j, k] = command;
    const sliced = array.slice(i - 1, j); // ➊ i부터 j까지 자르기
    sliced.sort((a, b) => a - b); // ➋ 자른 배열을 정렬하기
    answer.push(sliced[k - 1]); // ➌ k번째 원소 구하기
  }
  return answer;
}
