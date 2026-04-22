function solution(decimal) {
  const arr = [];
  while (decimal > 0) {
    arr.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return arr.reverse().join("");
}
