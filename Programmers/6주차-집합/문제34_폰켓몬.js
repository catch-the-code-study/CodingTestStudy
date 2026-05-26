// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// nums: [3, 1, 2, 3]
// result: 2

const solution = (nums) => {
  const numSet = new Set(nums);
  const half = nums.length / 2;

  return numSet.size > half ? half : numSet.size;
};

// 책에 있는 코드
function solution(nums) {
  const numSet = new Set(nums); // ➊ nums 배열에서 중복을 제거한 집합(set)을 구함
  const n = nums.length; // ➋ 폰켓몬의 총 수
  const k = n / 2; // ➌ 선택할 폰켓몬의 수
  return Math.min(k, numSet.size); // ➍ 중복을 제거한 폰켓몬의 종류 수와 선택할 폰켓몬의 수 중 작은 값 반환
}
