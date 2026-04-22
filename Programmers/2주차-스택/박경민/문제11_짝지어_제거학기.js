function solution(str) {
  const stack = [];

  for (const c of str) {
    let top = stack[stack.length - 1];
    if (c === top) stack.pop();
    else stack.push(c);
  }

  return stack.length === 0 ? 1 : 0;
}
