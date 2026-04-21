function solution(arr) {
  const Aarr = [...new Set(arr)];
  Aarr.sort((a, b) => b - a);
  return Aarr;
}

const testarr = [4, 2, 2, 1, 3, 4];

console.log(solution(testarr));
