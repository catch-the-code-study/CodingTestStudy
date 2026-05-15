function hashFunction(str) {
  const p = 31;
  const m = 1_000_000_007;
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += (str.charCodeAt(i) * p ** i) % m;
  }

  return hashValue;
}

function solution(strList, qrList) {
  const hashList = strList.map((str) => hashFunction(str));

  const result = [];
  for (const qr of qrList) {
    const qrHash = hashFunction(qr);
    if (hashList.includes(qrHash)) result.push(true);
    else result.push(false);
  }

  return result;
}
