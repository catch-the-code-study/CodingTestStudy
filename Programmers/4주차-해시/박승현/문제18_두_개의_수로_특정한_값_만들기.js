/**
 * 문제18_두_개의_수로_특정한_값_만들기
 * n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때
 * 이 중에서 합이 target인 두 수가 arr에 있는지 찾고
 * 있으면 true, 없으면 false를 반환하는 solution 함수를 작성하세요.
 * arr: [1, 2, 3, 4, 8] target: 6 return: true
 * arr: [2, 3, 5, 9] target: 10 return: false
 */
const solution = (arr, target) => {
  const numSet = new Set();

  for (const num of arr) {
    const needNum = target - num;

    if (numSet.has(needNum)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
};

// 책에 있는 코드
function countSort(arr, k) {
  // ➊ 해시 테이블 생성 및 초기화
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    // 현재 원소의 값이 k 이하인 때에만 처리
    if (num <= k) {
      // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
    // ➋ target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
