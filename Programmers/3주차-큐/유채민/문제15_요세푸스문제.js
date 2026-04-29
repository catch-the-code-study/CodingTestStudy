// N은 인원수, K번째 사람을 없앰

// function solution(N, K) {
//   let standard = 0;
//   const queue = [];
//   for (let i = 0; i < N; i++) {
//     //배열을 먼저 만든 다음에 무조건 앞에 있는 걸 꺼내면 됨.
//     const remove = standard + K;
//     for (let i = 0; i < remove; i++) {
//       queue.push(queue[0]);
//     }
//     queue.shift();
//     standard = remove + 1;
//   }
//   return queue;
// }

// console.log(solution(5, 3));

//==========================================================

// - 순환할 수 있도록 배열을 구성해야 한다
// 1. 먼저 큐를 구현한 다음 작엄

class Queue {
  items = [];
  front = 0;
  rear = 0;

  //뒤로만 넣을 수 있음
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  //앞에서만 꺼낼 수 있음
  pop() {
    return this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  for (let i = 1; i <= N; i++) {
    //먼저 초기 데이터 세팅
    queue.push(i);
  }

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < K - 1; j++) {
      queue.push(queue.pop());
      queue.pop();
    }
  }

  return queue.pop();
}

console.log(solution(5, 2));
