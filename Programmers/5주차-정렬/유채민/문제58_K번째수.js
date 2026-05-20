//배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때 k번째 있는 수 구하려고 한다.
//array, [i,j,k]를 원소로 가진 2차원 배열 commands가 주어질 때 commands의 모든 원소에 대하여 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 반환
function solution(array, commands) {
  const resultArr = [];
  //commands의 1차원 배열 길이만큼 반복
  for (const arr of commands) {
    // +이부분은 스프레드를 사용하면 간결해진다.
    const i = arr[0];
    const j = arr[1];
    const k = arr[2];
    const sliceArray = array.slice(i - 1, j);
    sliceArray.sort();
    resultArr.push(sliceArray[k - 1]);
  }

  console.log(resultArr);
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
