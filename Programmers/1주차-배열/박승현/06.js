// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// N:5, stages: [2, 1, 2, 6, 2, 4, 3, 3], result: [3,4,2,1,5]

const solution = (N, stages) => {
  let result = [];
  let totalPlayers = stages.length;

  const stageMap = new Array(N + 2).fill(0);
  for (const s of stages) {
    stageMap[s]++;
  }

  for (let i = 1; i <= N; i++) {
    let failedPlayers = stageMap[i];

    let rate = totalPlayers === 0 ? 0 : failedPlayers / totalPlayers;
    result.push({ stage: i, rate: rate });

    totalPlayers -= failedPlayers;
  }

  return result
    .sort((a, b) => b.rate - a.rate || a.stage - b.stage)
    .map((obj) => obj.stage);
};

// 책에 있는 코드
const bookSolution = (N, stages) => {
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
};
