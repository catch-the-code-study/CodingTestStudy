function isShallowEqual(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

function solution(want, number, discount) {
  const wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const discountObj = {};
    for (let j = i; j < i + 10; j++) {
      discountObj[discount[j]] = (discountObj[discount[j]] || 0) + 1;
    }
    if (isShallowEqual(discountObj, wantObj)) {
      answer += 1;
    }
  }
  return answer;
}
