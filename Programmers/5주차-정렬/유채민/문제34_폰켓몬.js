//총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  const set = new Set(nums);
  const numsSet = [...set];
  if (numsSet.length >= nums.length / 2) {
    return nums.length / 2;
  } else {
    return numsSet.length;
  }
}

console.log(solution([3, 3, 3, 2, 2, 2]));
