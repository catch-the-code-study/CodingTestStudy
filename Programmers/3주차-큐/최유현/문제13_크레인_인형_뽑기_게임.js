function solution(board, moves) {
  let answer = 0;
  const basket = [];
  moves.forEach((move) => {
    const column = move - 1;

    // 처음 5x5 박스에서 인형 집기
    for (let i = 0; i < board.length; i++) {
      if (board[i][column] !== 0) {
        const doll = board[i][column];
        board[i][column] = 0;

        //바구니 가장 위에 있는 인형 == 현재 집은 인형
        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  });

  return answer;
}
