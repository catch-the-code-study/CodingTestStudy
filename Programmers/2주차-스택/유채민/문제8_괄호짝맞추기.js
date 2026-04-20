//소괄호가 정상으로 열고 닫혔는지 판별하는 함수 구현

function solution(input){
  //의사코드 작성

  // 1. ( 기호가 나오면 push한다.
  // 2. ) 기호가 나오면 pop 한다.
  // 3. 마지막에 배열이 잘 비워져 있어야 true

  const stack = [];

  for (let i = 0; i < input.length; i++){
    if (input[i] === '('){
      stack.push(input[i])
    } else if (input[i] ===')'){
      if (stack.length == 0){
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length == 0){
    return true;
  } else {
    return false;
  }

  // 마지막 부분은 return stack.length === 0; 사용 가능
  // 단순한 for 반복문이 아닌 for of 문 사용 가능


}


input = '((()))() ())(())'
console.log(solution(input))