function solution(string) {
  let arr = [];
  for (const i of string) {
    if (arr.length === 0) {
      arr.push(i);
      continue;
    }

    let top = arr.length - 1;

    if (i === "(") {
      arr.push(i);
    } else if (i === ")" && arr[top] === "(") {
      arr.pop();
    }
  }
  return arr.length === 0;
}
