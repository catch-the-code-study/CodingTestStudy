function solution(arr1, arr2) {
  // 1. arr1의 각 행(row)에 대해 반복합니다.
  return arr1.map((row) => {
    // 2. arr2의 열(column) 개수만큼 결과값이 나와야 합니다.
    // arr2[0]의 길이는 곧 결과 행렬의 가로 길이와 같습니다.
    return arr2[0].map((_, colIndex) => {
      // 3. row(arr1의 행)의 각 원소와 arr2의 같은 위치 열 원소를 곱해 더합니다.
      // reduce를 사용하면 합계를 구하기 쉽습니다.
      return row.reduce((sum, current, i) => {
        return sum + current * arr2[i][colIndex];
      }, 0);
    });
  });
}

// 거의 ai 써서 푼 문제여서 다시 봐야함..
