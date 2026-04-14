function solution(arr1, arr2) {
  const row1 = arr1.length; //arr1의 행
  const col1 = arr1[0].length; //arr1의 열
  const row2 = arr2.length; //arr2의 행
  const col2 = arr2[0].length; //arr2의 열

  const arr3 = Array.from({ length: row1 }, () => Array(col2).fill(0)); //곱셈을 통해 생기는 행렬의 크기

  //arr1의 열과 arr2의 행이 같아야 행렬의 곱셈이 성립한다
  if (col1 === row2) {
    for (let i = 0; i < row1; i++) {
      for (let j = 0; j < col2; j++) {
        for (let k = 0; k < col1; k++) {
          arr3[i][j] += arr1[i][k] * arr2[k][j];
        }
      }
    }
  }
  return arr3;
}
