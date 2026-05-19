function solution(s) {
  const charArr = Array.from({ length: 26 }, (_, i) => 0);
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    charArr[s.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] === 0) continue;
    for (let j = 0; j < charArr[i]; j++) {
      answer += String.fromCharCode(i + 97);
    }
  }
  console.log(answer);
}
