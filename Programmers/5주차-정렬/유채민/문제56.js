//문자열로 구성된 배열 strings와 정수 n
//각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬

function createSortArr(string, n) {
  const resultArr = [];

  for (const element of string) {
    //n번째 string을 뽑아서 새로운 배열을 만들어 리턴
    //새로운 배열은 2차원 배열으로 0번 인덱스에는 글자 하나를, 1번 인덱스에는 요소 그 자체를 넣는다.
    const pushElement = [element[n], element];
    resultArr.push(pushElement);
  }

  return resultArr;
}

function solution(string, n) {
  //정답으로 리턴할 배열
  const resultArr = [];

  const charArray = createSortArr(string, n);
  //배열을 정렬한 다음
  charArray.sort();

  //원래 문자열만 다시 넣어서 리턴
  for (const el of charArray) {
    resultArr.push(el[1]);
  }
  return resultArr;
}

const arr1 = ["sun", "bed", "car"];
const arr2 = ["abce", "abcd", "cdx"];
console.log(solution(arr2, 2));
