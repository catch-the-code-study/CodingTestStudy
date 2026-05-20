function solution(array, commands) {
  const answer = [];
  for (const command of commands) {
    answer.push(resolveCommand(array, command));
  }
  return answer;
}

function resolveCommand(arr, command) {
  // 원본 배열을 건드리지 않는 slice 사용
  const cutArr = arr.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
  return cutArr[command[2] - 1];
}
