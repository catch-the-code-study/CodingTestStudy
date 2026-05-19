//정수 내림차순으로 배치하기
//정수 n을 받아 각 자릿수를 내림차순으로 정렬한 새로운 정수 반환

function solution(number) {
  const stringArr = Array.from(String(number));
  stringArr.sort((a, b) => b - a);
  return stringArr.join("");
}

console.log(solution(118372));
