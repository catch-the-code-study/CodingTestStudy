/*
 n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 
 이 중에서 합이 target인 두 수가 arr에 있는지 찾고,
 있으면 true, 없으면 false를 반환하는 solution() 함수를 작성하세요.

 [제약조건]
 n은 2 이상 10,000 이하의 자연수입니다.
 arr의 각 원소는 1 이상 10,000 이하의 자연수입니다.
 arr의 원소 중 중복되는 원소는 없습니다.
 target은 1 이상 20,000 이하의 자연수입니다.
*/

function solution(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return true;
			}
		}
	}
	return false;
}

/*
해시를 활용한 풀이 예시

function solution(arr, target) {
    const set = new Set(arr);

    for (let i = 0; i < arr.length; i++) {
        const pair = target - arr[i];
        if (set.has(pair) && pair !== arr[i]) {
            return true;
        }
    }
    return false;
}
*/
