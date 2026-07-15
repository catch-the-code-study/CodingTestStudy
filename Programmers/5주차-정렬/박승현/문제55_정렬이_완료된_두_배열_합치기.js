// 정렬이 완료된 두 배열 합치기
// 이미 정렬이 완료되어 있는 두 배열 arr1, arr2을 받아 병합 정렬하는 solution() 함수를 구현하세요.
// arr1과 arr2는 각각 길이가 1 이상 100,000 이하입니다.
// arr1과 arr2는 각각 오름차순으로 정렬되어 있습니다.
// arr1: [1, 3, 5]
// arr2: [2, 4, 6]
// return: [1, 2, 3, 4, 5, 6]

const solution = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

// 책에 있는 코드
function solution(arr1, arr2) {
  const merged = []; // 정렬된 배열을 저장할 리스트 생성
  let i = 0,
    j = 0; // 두 배열의 인덱스 초기화

  // 두 배열을 순회하면서 정렬된 배열을 생성
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  // arr1이나 arr2 중 남아있는 원소들을 정렬된 배열 뒤에 추가
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j += 1;
  }

  return merged;
}

console.log(solution([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(solution([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
