function solution(s) {
  const arr = s.split("");
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.shift());
    const stack = [];
    let valid = true;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "[" || arr[j] === "(" || arr[j] === "{") {
        stack.push(arr[j]);
      } else {
        if (stack.length === 0) {
          valid = false;
          break;
        }
        const top = stack[stack.length - 1];
        if (arr[j] === "]" && top === "[") stack.pop();
        else if (arr[j] === ")" && top === "(") stack.pop();
        else if (arr[j] === "}" && top === "{") stack.pop();
        else {
          valid = false;
          break;
        }
      }
    }
    if (stack.length === 0 && valid === true) answer++;
  }
  return answer;
}
