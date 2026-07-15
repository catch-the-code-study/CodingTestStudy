// n은 사람수
function solution(n, words) {
  const used = new Set();
  let lastChar = words[0][0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const player = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    if (used.has(word)) {
      return [player, turn];
    }

    if (word[0] !== lastChar) {
      return [player, turn];
    }

    used.add(word);
    lastChar = word[word.length - 1];
  }

  return [0, 0];
}
