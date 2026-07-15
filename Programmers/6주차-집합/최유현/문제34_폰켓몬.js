function solution(nums) {
  const nset = new Set(nums);
  const n = nums.length / 2;
  const k = n / 2;

  return nset.size > k ? k : nset.size;
}
