/*
  인자로 받은 문자열 s를 계수 정렬로 정렬하여 반환하는 solution() 함수를 구현하세요.

  문자열 s
  계수 정렬
  정렬
  반환
*/

function solution(s) {
	const counts = Array(26).fill(0);
	let result = '';

	for (const char of s) {
		const index = char.charCodeAt(0) - 97;

		counts[index]++;
	}

	for (let i = 0; i < counts.length; i++) {
		const char = String.fromCharCode(i + 97);

		result += char.repeat(counts[i]);
	}

	return result;
}
