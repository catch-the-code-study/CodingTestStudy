// 괄호 회전하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76502
// str: "[](){}" return: 3

const solution = (str) => {
  const pattern = ["()", "[]", "{}"];
  const checkPattern = (str) => pattern.some((p) => str.includes(p));

  let arr = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (const s of str) {
      arr.push(s);

      if (checkPattern(arr.join(""))) {
        arr.pop();
        arr.pop();
      }
    }

    if (arr.length === 0) count++;
    str = str.slice(1) + str[0];
    arr = [];
  }

  return count;
};

// 책에 있는 코드
function bookSolution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      // ➊ 괄호 문자열을 회전시키면서 참조
      const c = s[(i + j) % n];

      if (c === "[" || c === "(" || c === "{") {
        // ➋ 열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          // ➌ 여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }

        // ➍ 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    // ➎ 모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
