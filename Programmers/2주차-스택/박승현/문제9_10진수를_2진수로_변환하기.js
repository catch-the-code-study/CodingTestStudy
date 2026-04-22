/**
 * N은 s의 길이입니다. s를 순회하며 괄호의 쌍을 확인하므로 시간 복잡도는 O(N)입니다.
 * 참고로 괄호 쌍을 확인할 때 push() 메서드와 pop() 메서드의 시간 복잡도는 O(1)입니다.
 * decimal: 10, return: 1010
 */

const solution = (decimal) => {
  const stack = [];

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return stack.reverse().join("");
};

console.log(solution(10));

// 책에 있는 코드

function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}
