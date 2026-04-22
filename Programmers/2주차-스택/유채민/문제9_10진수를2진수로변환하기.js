//10진수를 입력받아 2진수로 변환하는 solution

function solution(decimal) {
  const stack = [];
  let result = "";

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  //Math.floor메소드 생각 못함

  const round = stack.length;

  for (let i = 0; i < round; i++) {
    result = result + stack.pop();
  }

  // 이 for구문도 while문으로 처리 가능
  // while(stack.length > 0){}

  return result;
}

console.log(solution(27));
