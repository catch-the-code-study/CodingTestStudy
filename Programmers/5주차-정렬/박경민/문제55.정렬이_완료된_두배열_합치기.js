function solution(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (true) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      result.push(arr2[j]);
      i++;
      j++;
    }

    if (i === arr1.length && j === arr2.length) return result.join("");

    if (i === arr1.length && j !== arr2.length) {
      while (j < arr2.length) result.push(arr2[j++]);
      return result.join("");
    }

    if (j === arr2.length && i !== arr1.length) {
      while (i < arr1.length) result.push(arr1[i++]);
      return result.join("");
    }
  }
}
