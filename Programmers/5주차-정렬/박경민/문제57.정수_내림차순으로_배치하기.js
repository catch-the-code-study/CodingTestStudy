function solution(n) {
  return Number(
    String(n)
      .split("")
      .map((str) => Number(str))
      .sort((a, b) => b - a)
      .join(""),
  );
}
