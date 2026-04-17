/**
 * 알파벳 소문자로 구성된 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
 * 짝을 찾은 다음에는 그 둘을 제거한 뒤 앞뒤로 문자열을 이어붙입니다.
 * 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
 * 문자열 S가 주어졌을 때 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성하세요.
 * 성공적으로 수행할 수 있으면 1을, 아니면 0을 반환해주면 됩니다.
 * s: "baabaa" | result: 1
 * s: "cdcd" | result: 0
 */

const solution = (str) => {
  const arr = [];

  for (const s of str) {
    arr.push(s);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }

  return arr.length === 0 ? 1 : 0;
};
