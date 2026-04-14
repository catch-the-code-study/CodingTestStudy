function solution(arr) {
  //1. 배열을 set에 담아서 중복 제거
  //2. 스프레트 문법으로 배열에 다시 담고
  //3. sort 메소드로 내림차순
  return [...new Set(arr)].sort((a, b) => b - a);
}

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
