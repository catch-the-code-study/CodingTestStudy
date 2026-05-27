//정수를 이어붙여 만들 수 있는 가장 큰 수를 알아내세요
//ex. [6,10,2] => 6210가 가장 큰 수

function solution(numberArray) {
  // +각 숫자를 붙여보고 큰 경우를 반환

  let maxNumber = "";
  for (let i = 0; i < numberArray.length - 1; i++) {
    //처음에만 둘 다 원래 배열에서 가져오니까 다르게 처리
    if (i === 0) {
      if (
        Number(String(numberArray[i]) + String(numberArray[i + 1])) >
        Number(String(numberArray[i + 1]) + String(numberArray[i]))
      ) {
        maxNumber = String(numberArray[i]) + String(numberArray[i + 1]);
      } else {
        maxNumber = String(numberArray[i + 1]) + String(numberArray[i]);
      }
    } else {
      if (
        Number(maxNumber + numberArray[i + 1]) >
        Number(numberArray[i + 1] + maxNumber)
      ) {
        maxNumber = maxNumber + numberArray[i + 1];
      } else {
        maxNumber = numberArray[i + 1] + maxNumber;
      }
    }
  }
  return maxNumber;
}

console.log(solution([3, 30, 34, 5, 9]));
