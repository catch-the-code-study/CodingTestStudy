/**
 * 정수 배열 numbers가 주어집니다.
 * numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를
 * 배열에 오름차순으로 담아 반환하는
 * solution() 함수를 완성하세요.
 * - numbers의 길이는 2 이상 100 이하입니다.
 * - numbers의 모든 수는 0 이상 100 이하입니다.
 */

function solution(numbers) {
	const result = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			result.push(numbers[i] + numbers[j]);
		}
	}

	return [...new Set(result)].sort((a, b) => a - b);
}

// function solution(numbers) {
// 	const result = [];

// 	for (let i = 0; i < numbers.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			result.push(numbers[i] + numbers[j]);
// 		}
// 	}
// 	return [...new Set(result)].sort((a, b) => a - b);
// }

/**
 * [참고 코멘트]
 * - 두 수의 모든 조합을 구할 때 = 이중 반복문
 */
