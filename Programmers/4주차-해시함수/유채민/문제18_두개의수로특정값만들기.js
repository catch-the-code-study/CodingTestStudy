//n개의 양의 정수로 이루어진 리스트 arr, 정수 target에서 합이 target인 두 수가 arr에 있는지 찾아라

//arr의 임의의 원소 x에 대해서 x+k = target인 k가 리스트에 있는지 확인하기
function hash(arr, target) {
  //처음에는 arr의 max 값을 찾아서 그 크기만큼 해시테이블을 만들면 된다고 생각했으나 그럴 필요 없이 target의 크기에 맞추면 된다.
  // const max = Math.max(arr);
  const hashtable = new Array(target + 2).fill(0);
  for (const num of arr) {
    hashtable[num] = 1;
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = hash(arr, target);
  for (let num of arr) {
    const findElement = target - num;
    // if (hashtable[findElement] === 1) {
    //   return true;
    // }

    //자기자신은 제외해야 한다.
    if (hashtable[findElement] === 1) {
      if (num === findElement) {
        return false;
      }
      return true;
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
