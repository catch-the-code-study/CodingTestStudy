function solution(nums) {
  const pick = nums.length / 2;
  const pockList = new Set(nums).size;
  if (pick <= pockList) return pick;
  else return pockList;
}
