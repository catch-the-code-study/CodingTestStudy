//정수 배열 numbers
//서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를
//배열에 오름차순으로 담아 반환

function solution(numbers){
  const newArr = [];
  for (let i = 0; i < numbers.length; i++){
    for (let j = i+1; j<numbers.length; j++){
      newArr.push(numbers[i] + numbers[j]);
    }
  }

  return [... new Set(newArr)].sort((a, b) => a - b);
}

//만들 수 있는 모든 수 -> 중복 제거라는 걸 생각하지 못함


// const test = [5, 0, 2,7]
// const answer = solution(test);
// console.log(answer);