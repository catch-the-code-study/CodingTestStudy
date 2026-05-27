//이미 정렬되어 있는 arr1 arr2를 정렬하는 함수

function compare(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function solution(arr1, arr2) {
  const resultArr = [];
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    const nextPush = compare(arr1[pointer1], arr2[pointer2]);
    resultArr.push(nextPush);
    //더 큰 쪽의 포인터를 옮겨줘야함.
    if (nextPush === arr1[pointer1]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }

  console.log(resultArr);
}

solution([1, 3, 5], [2, 4, 6]);
