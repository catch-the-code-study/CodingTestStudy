// 행렬의 곱셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12949
// arr1: [[1, 4], [3, 2], [4, 1]] arr2: [[3, 3], [3, 3]]

const solution = (arr1, arr2) => {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const col2 = arr2[0].length;

  const result = Array.from({ length: row1 }, () => Array(col2).fill(0));

  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
};
