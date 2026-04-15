//정수 배열을 정렬해서 반환하는 solution 함수 작성
//정수 배열의 길이는 2이상 100000 이하
//정수 배열의 각 데이터 값은 -100,000 ~ 100,000

function solution(arr){
  arr.sort((a, b) => a-b)
  return arr;
}