function solution(numbers) {
  let newArr = [];
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      newArr.push(sum);
    }
  }

  return [...new Set(newArr)].sort((a, b) => a - b);
}

//1. 반복문을 통해 서로 다른 인덱스인 2개의 수를 뽑아서 더하고 새로운 배열에 추가한다
//2. 새로운 배열을 set에 넣어 중복을 제거
//3. sort로 오름차순 정렬 후 반환
