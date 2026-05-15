function solution(record) {
  let answer = [];

  const uId = {};

  for (const line of record) {
    const cmd = line.split(" ");
    if (cmd[0] !== "Leave") uId[cmd[1]] = cmd[2];
  }

  for (const line of record) {
    const cmd = line.split(" ");
    if (cmd[0] === "Enter") {
      answer.push(`${uId[cmd[1]]}님이 들어왔습니다.`);
    } else if (cmd[0] === "Leave") {
      answer.push(`${uId[cmd[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}
