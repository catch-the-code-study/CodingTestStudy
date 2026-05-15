// 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// participant: ["mislav", "stanko", "mislav", "ana"] completion ["stanko", "ana", "mislav"] return: "mislav"

const solution = (participant, completion) => {
  const hashMap = new Map();

  for (const name of participant) {
    hashMap.set(name, (hashMap.get(name) || 0) + 1);
  }

  for (const name of completion) {
    hashMap.set(name, hashMap.get(name) - 1);
  }

  for (const [name, count] of hashMap) {
    if (count > 0) return name;
  }
};

// 책에 있는 코드
function solution(participant, completion) {
  // ➊ 해시 테이블 생성
  const obj = {};

  // ➋ 참가자들의 이름을 해시 테이블에 추가
  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  // ➌ 완주한 선수들의 이름을 키로 하는 값을 1씩 감소
  for (const c of completion) {
    obj[c] -= 1;
  }

  // ➍ 해시 테이블에 남아 있는 선수가 완주하지 못한 선수
  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}
