// 계수 정렬 구현하기
// 인자로 받은 문자열 s를 계수 정렬로 정렬하여 반환하는 solution() 함수를 구현하세요.
// strings의 길이는 1 이상 10,000 이하입니다.
// s는 알파벳 소문자로 이루어져 있습니다.
// s: "hello"
// return: "ehllo"

const solution = (s) => {
  const count = new Array(26).fill(0);

  const BASE_CODE = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - BASE_CODE;
    count[index]++;
  }

  let result = "";
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      const char = String.fromCharCode(i + BASE_CODE);
      result += char.repeat(count[i]);
    }
  }

  return result;
};

// 책에 있는 코드
function solution(s) {
  const counts = Array(26).fill(0); // ❶ 알파벳 개수(26개)만큼 빈도수 배열 생성

  // ❷ 문자열의 각 문자에 대한 빈도수를 빈도수 배열에 저장
  for (const c of s) {
    counts[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  // ❸ 빈도수 배열을 순회하면서 정렬된 문자열을 생성
  let sortedStr = "";
  for (let i = 0; i < 26; i++) {
    sortedStr += String.fromCharCode(i + "a".charCodeAt(0)).repeat(counts[i]);
  }

  return sortedStr;
}

console.log(solution("hello")); // 'ehllo'
console.log(solution("algorithm")); // 'aghilmort'
