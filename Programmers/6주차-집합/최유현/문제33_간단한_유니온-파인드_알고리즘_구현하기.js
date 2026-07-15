// 유니온 파인드
// 큰쪽을 작은쪽으로 붙이는 방식으로 구현

function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }
  parent[x] = find(parent, parent[x]);
  return parent[x];
}

function union(parent, a, b) {
  const aRoot = find(parent, a);
  const bRoot = find(parent, b);

  if (aRoot !== bRoot) {
    parent[bRoot] = aRoot;
  }
}

function solution(k, operations) {
  const parents = Array.from({ length: k }, (_, i) => i);
  let n = k;

  for (const op of operations) {
    if (op === "u") {
      union(parents, op[1], op[2]);
    } else if (op === "f") {
      find(parents, op[1]);
    }
    n = new Set(parents.map((p) => find(parents, p))).size;
  }
  return n;
}
