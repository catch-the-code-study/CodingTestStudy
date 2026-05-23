// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// nums: [3, 1, 2, 3]
// result: 2

const solution = (nums) => {
  const numSet = new Set(nums);
  const half = nums.length / 2;

  return numSet.size > half ? half : numSet.size;
};
