// 문자열 내 마음대로 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// srings: ["sun", "bed", "car"]
// n:1
// return: ["car", "bed", "sun"]

const solution = (strings, n) => {
  const sortedString = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }

    if (a[n] < b[n]) {
      return -1;
    }

    return a > b ? 1 : -1;
  });

  return sortedString;
};

// 책에 있는 코드
function solution(strings, n) {
  return strings.sort(function (a, b) {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    } else {
      return a[n] > b[n] ? 1 : -1;
    }
  });
}
