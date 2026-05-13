// 오픈채팅방
// https://school.programmers.co.kr/learn/courses/30/lessons/42888
// record: ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
// result: ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

const solution = (record) => {
  const nameMap = new Map();
  const result = [];

  const msgTemplate = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (const r of record) {
    const [command, uid, name] = r.split(" ");
    if (command !== "Leave") {
      nameMap.set(uid, name);
    }
  }

  for (const r of record) {
    const [command, uid] = r.split(" ");
    if (command !== "Change") {
      result.push(`${nameMap.get(uid)}${msgTemplate[command]}`);
    }
  }

  return result;
};

// 책에 있는 코드
function solution(record) {
  answer = [];
  uid = {};

  for (line in record) {
    // ➊ record의 각 줄을 하나씩 처리
    cmd = record[line].split(" ");
    if (cmd[0] != "Leave") {
      // ➋ Enter 또는 Change인 경우
      uid[cmd[1]] = cmd[2];
    }
  }

  for (line in record) {
    // ➌ record의 각 줄을 하나씩 처리
    cmd = record[line].split(" ");
    // ➍ 각 상태에 맞는 메시지를 answer에 저장
    if (cmd[0] == "Enter") {
      answer.push(uid[cmd[1]] + "님이 들어왔습니다.");
    } else if (cmd[0] == "Leave") {
      answer.push(uid[cmd[1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}
