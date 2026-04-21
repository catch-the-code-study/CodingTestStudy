function solution(answers) {
  // 1. 각 수포자들의 반복되는 패턴 정의
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 2. 점수를 저장할 배열
  const scores = [0, 0, 0];

  // 3. 반복문으로 정답 확인
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) scores[0]++;
    if (answers[i] === p2[i % p2.length]) scores[1]++;
    if (answers[i] === p3[i % p3.length]) scores[2]++;
  }

  // 4. 최고 점수 찾기
  const maxScore = Math.max(...scores);

  // 5. 최고 점수를 받은 사람(인덱스+1)을 배열에 담아 반환
  const result = [];
  if (scores[0] === maxScore) result.push(1);
  if (scores[1] === maxScore) result.push(2);
  if (scores[2] === maxScore) result.push(3);

  return result;
}
