function solution(participant, completion) {
  const map = new Map();

  for (const name of completion) {
    if (!map.has(name)) map.set(name, 1);
    else map.set(name, map.get(name) + 1);
  }

  for (const name of participant) {
    if (!map.has(name) || map.get(name) === 0) return name;
    else map.set(name, map.get(name) - 1);
  }
}
