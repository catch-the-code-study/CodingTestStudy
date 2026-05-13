//문자열리스트 stringList와 쿼리스트 queryList. 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부 확인.
// 각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 함수 작성

function stringHash(string) {
  const p = 31;
  const m = 1000000007;

  let result = 0;
  for (let i = 0; i < string.length; i++) {
    result = (result * p + string.charCodeAt(i)) % m;
  }

  return result;
}

function solution(query, string) {
  //불린 결과를 담을 배열 생성
  const result = [];
  const queryArr = [];

  for (const item of query) {
    queryArr.push(stringHash(item));
  }

  for (const item of string) {
    //해싱한다음 바로 비교
    const stringHashItem = stringHash(item);

    if (queryArr.includes(stringHashItem)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

//테스트 코드
console.log(solution(["a", "b", "c"], ["a", "d", "b", "rs"]));
