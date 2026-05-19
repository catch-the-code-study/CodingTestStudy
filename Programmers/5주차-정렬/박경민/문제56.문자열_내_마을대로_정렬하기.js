function solution(strings, n) {
  const chArr = Array(26).fill(0);
  const result = [];

  for (const s of strings) {
    let ascii = s.charCodeAt(n) - 97;
    if (chArr[ascii] === 0) {
      chArr[ascii] = Array.of(s);
    } else {
      chArr[ascii].push(s);
      chArr[ascii].sort((a, b) => a.localeCompare(b));
    }
  }

  for (let i = 0; i < chArr.length; i++) {
    if (chArr[i] !== 0) {
      result.push(...chArr[i]);
    }
  }

  return result;
}
