class Queue {
  constructor() {
    this.store = {};
    this.head = 0;
    this.tail = 0;
  }

  get size() {
    return this.tail - this.head;
  }

  push(item) {
    this.store[this.tail++] = item;
  }

  pop() {
    if (this.size === 0) return null;
    const item = this.store[this.head];
    delete this.store[this.head++];
    return item;
  }
}

function solution(n, k) {
  const q = new Queue();
  const res = [];

  for (let i = 1; i <= n; i++) q.push(i);

  while (q.size > 0) {
    // k-1번 회전
    for (let i = 0; i < k - 1; i++) {
      q.push(q.pop());
    }
    // k번째 제거
    res.push(q.pop());
  }

  return res;
}

// 확인용
console.log(solution(7, 3)); // [3, 6, 2, 7, 5, 1, 4]
