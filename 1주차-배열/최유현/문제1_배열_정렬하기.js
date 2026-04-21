function solution(arr) {
  arr.sort((x, y) => x - y);
  return arr;
}

const arr1 = [2, 1, 1, 3, 2, 5, 4];
console.log(solution(arr1));
