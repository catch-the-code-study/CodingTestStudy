function solution(progresses, speeds) {
  const res = [];
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  let first = days[0];
  let count = 0;

  for (const d of days) {
    if (d <= first) {
      count++;
    } else {
      res.push(count);
      count = 1;
      first = d;
    }
  }
  res.push(count);
  return res;
}
