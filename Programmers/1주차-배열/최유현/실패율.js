function solution(N, stages) {
  let result = [];
  let totalPlayers = stages.length; // 전체 플레이어 수

  for (let i = 1; i <= N; i++) {
    // 1. 현재 스테이지(i)에 머물러 있는 플레이어 수 계산
    let currentStagePlayers = stages.filter((s) => s === i).length;

    // 2. 실패율 계산 (도달한 유저가 없는 경우 0으로 처리)
    let failureRate = 0;
    if (totalPlayers > 0) {
      failureRate = currentStagePlayers / totalPlayers;
    }

    // 3. 결과 배열에 {스테이지 번호, 실패율} 객체 저장
    result.push({ stage: i, rate: failureRate });

    // 4. 다음 스테이지 도달 유저 수 = 현재 도달 유저 - 현재 머물러 있는 유저
    totalPlayers -= currentStagePlayers;
  }

  // 5. 실패율 기준 내림차순 정렬
  // 실패율이 같다면(b.rate === a.rate) 스테이지 번호 오름차순(기본값)
  result.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage;
    }
    return b.rate - a.rate;
  });

  // 6. 스테이지 번호만 추출해서 반환
  return result.map((item) => item.stage);
}
