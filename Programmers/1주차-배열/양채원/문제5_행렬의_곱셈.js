/**
 2차원 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution() 함수를 완성하세요.

 [제약 조건]
 - 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
 - 행렬 arr1, arr2의 데이터는 -10 이상 20 이하인 자연수입니다.
 곱할 수 있는 배열만 주어집니다.
 */

function solution(arr1, arr2) {
	const result = [];

	for (let i = 0; i < arr1.length; i++) {
		result[i] = [];

		for (let j = 0; j < arr2[0].length; j++) {
			let sum = 0;

			for (let k = 0; k < arr1[0].length; k++) {
				sum += arr1[i][k] * arr2[k][j];
			}

			result[i][j] = sum;
		}
	}

	return result;
}
