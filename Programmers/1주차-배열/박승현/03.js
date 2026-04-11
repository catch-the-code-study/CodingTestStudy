// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// numbers: [5,0,2,7]

const solution = (numbers) => {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
};

// 개선 코드
const improvedSolution = (numbers) => {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
};

// 책에 있는 코드
const bookSolution = () => {
  const ret = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      ret.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(ret)].sort((a, b) => a - b);
};
