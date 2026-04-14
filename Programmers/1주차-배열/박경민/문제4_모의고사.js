function solution(answers) {
  const answersA = [1, 2, 3, 4, 5];
  const answersB = [2, 1, 2, 3, 2, 4, 2, 5];
  const answersC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  function numberOfCorrect(hisAnswers, realAnswers) {
    let count = 0;
    let j = 0; //수포자의 패턴을 도는 인덱스
    for (let i = 0; i < realAnswers.length; i++) {
      if (j >= hisAnswers.length) j = 0;
      if (realAnswers[i] === hisAnswers[j]) count++;
      j++;
    }
    return count;
  }
  const a = numberOfCorrect(answersA, answers);
  const b = numberOfCorrect(answersB, answers);
  const c = numberOfCorrect(answersC, answers);
  const max = Math.max(a, b, c);
  const ranks = [];

  if (a === max) ranks.push(1);
  if (b === max) ranks.push(2);
  if (c === max) ranks.push(3);

  return ranks;
}

//1. 각 수포자의 정답 패턴을 저장
//2. 수포자 패턴과 정답을 비교
//3. 정답 갯수 중 가장 큰 값과 비교
//4. 가장 많이 맞힌 수포자를 배열에 담고 반환
