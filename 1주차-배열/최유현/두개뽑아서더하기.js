let arr = [5, 0, 2, 7];
let Aarr = [];
let result = [];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    Aarr.push(arr[i] + arr[j]);
  }
}
// 일단 오른차순 정렬
Aarr.sort((a, b) => a - b);

// set 객체로 중복 제거
result = [...new Set(Aarr)];
console.log(result);
