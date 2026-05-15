function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
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
