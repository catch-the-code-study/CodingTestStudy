// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// answers: [1,2,3,4,5]

const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  answers.forEach((ans, i) => {
    if (ans === patterns[0][i % patterns[0].length]) scores[0]++;
    if (ans === patterns[1][i % patterns[1].length]) scores[1]++;
    if (ans === patterns[2][i % patterns[2].length]) scores[2]++;
  });

  const maxScore = Math.max(...scores);
  const result = [];

  scores.forEach((score, i) => {
    if (score === maxScore) result.push(i + 1);
  });

  return result;
};

// 책에 있는 코드
const bookSolution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);
  const higherScores = [];

  scores.forEach((score, i) => {
    if (score === maxScore) higherScores.push(i + 1);
  });

  return higherScores;
};
