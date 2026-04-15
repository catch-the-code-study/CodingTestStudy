// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록

function solution(N, stages){
  //먼저 1이 몇개 있는지 찾는다.
  //1의 실패율을 구한다.
  //2가 몇 개 있는지 찾는다.
  //전체 length에서 1의 개수를 빼고 실패율을 구한다.
  //stages의  max number은 N+1이다. 

  const faultRate = [];
  let challenger = stages.length;

  function findStage(n){
    const stageCount = stages.filter((stage => stage === n))
    return stageCount.length;
  }

  // const stage1count = findStage(1);
  // faultRate.push(stage1count/challenger);

  // challenger = challenger - stage1count;

  for (let i = 1; i <= N; i++){
    const stagecount = findStage(i);
    let rate = stagecount/challenger;
    faultRate.push({ stage: i, rate: rate});

    challenger = challenger - stagecount;
  }

  // const maxFaultRate = Math.max(faultRate);

  // for (let i = 0; i< faultRate.length; i++){
  //   if (maxFaultRate === faultRate[i]){
  //     hightFaultRate.push(i);
  //   }
  // }

  faultRate.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage; // 실패율이 같으면 작은 번호가 앞
    }
    return b.rate - a.rate;
  });

  return faultRate.map(item => item.stage);
}

console.log(solution(5, [1,2,6]));

//실패율과 스테이지를 객체로 관리, -> 정렬하는 부분에서 막혔었음