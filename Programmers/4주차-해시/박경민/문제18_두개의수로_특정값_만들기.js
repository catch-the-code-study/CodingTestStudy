function solution(arr, target) {
  //target과 요소를 뺀 값이 배열에 포함되는 동시에 현재 비교 대상의 요소가 아닌지 확인
  for (const num of arr) {
    if (arr.includes(target - num) && target - num !== num) return true;
  }
  return false;
}
