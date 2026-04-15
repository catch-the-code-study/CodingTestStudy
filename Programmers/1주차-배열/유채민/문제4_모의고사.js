// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answerArr){
  const point = [0, 0, 0];
  

  const student1 = [1,2,3,4,5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i=0; i <= answerArr.length - 1; i++){
    if (student1[i%5] === answerArr[i]){
      ++point[0];
    }
    if (student2[i % 8] === answerArr[i]){
      ++point[1];
    }
    if (student3[i%10] === answerArr[i]){
      ++point[2];
    }
  }

  const maxScore = Math.max(...point);  
  const highScore = [];

  for (let i = 0; i<point.length; i++){
    if (point[i]=== maxScore){
      highScore.push(i+1);
    }
  }

  return highScore;
}


// const arr = [1,3,2,4,2];
// console.log(solution(arr));