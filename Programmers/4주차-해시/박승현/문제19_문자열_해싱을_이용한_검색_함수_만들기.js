/** 문제 19
 * 문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때
 * 각 쿼리 리시트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부를 확인해야 합니다.
 * 문자열이 있으면 true, 없으면 false가 됩니다.
 * 각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 solution 함수를 작성하세요.
 * stringList: ["apple", "banana", "cherry"] queryList: ["banana", "kiwi", "melon", "apple"] return: [true, false, false, true]
 */

const solution = (stringList, queryList) => {
  const stringSet = new Set(stringList);
  const result = queryList.map((query) => stringSet.has(query));

  return result;
};

// 책에 있는 코드

// ➊ polynomial hash를 구현한 부분
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution(stringList, queryList) {
  // ➋ stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((str) => polynomialHash(str));

  // ➌ queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]),
);
