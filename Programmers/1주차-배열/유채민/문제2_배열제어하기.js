//정수 배열을 하나 받아 중복값을 제거하고 배열 데이터를 내림차순으로 정렬
function solution(arr){
  //set 객체를 활용한다. 
  const newArr = [... new Set(arr)];
  newArr.sort((a,b) => b-a);
  return newArr;
}