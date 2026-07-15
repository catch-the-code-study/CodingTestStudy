function solution(n, words) {
  const checkWords = [];
  const countArr = Array.from({ length: n }, (_, i) => 0);

  const isIncluded = (word) => checkWords.includes(word);

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const isValid = i === 0 || words[i - 1].at(-1) === w[0];
    if (!isIncluded(w) && isValid) {
      countArr[i % n]++;
      checkWords.push(w);
    } else {
      return [(i % n) + 1, countArr[i % n] + 1];
    }
  }
  return [0, 0];
}
