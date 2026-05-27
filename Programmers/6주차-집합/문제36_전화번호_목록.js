// 전화번호 목록
// https://school.programmers.co.kr/learn/courses/30/lessons/42577
// phone_book: ["119", "97674223", "1195524421"]
// result: false

const phone_book = ["119", "97674223", "1195524421"];

const solution = (phone_book) => {
  phone_book.sort();
  console.log(phone_book);
};

solution(phone_book);

// 책에 있는 코드
function solution(phone_book) {
  phone_book.sort(); // ➊ 전화번호부 정렬
  // ➋ 전화번호부에서 연속된 두 개의 전화번호 비교
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  // ➌ 모든 전화번호를 비교한 후에도 반환되지 않았다면, 접두어가 없는 경우이므로 true 반환
  return true;
}
