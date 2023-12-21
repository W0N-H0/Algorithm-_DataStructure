// [문제 이름]
// : 공원산책

// [문제 설명]
// :지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.
// ["방향 거리", "방향 거리" … ]
// 예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.
// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
// 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
// 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때, 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  // 직사각형 공원이 가로 세로 길이
  const maxRow = park.length - 1;
  const maxCol = park[0].length - 1;

  // 시작 지점의 좌표를 구한다.
  // findIndex(), includes() 메서드를 이용해 몇 번째 행에 있는지를 구한다.
  // 구한 행에서 indexOf() 메서드를 이용해 몇 번째 열에 있는지 구한다.
  let row = park.findIndex((s) => s.includes("S"));
  let col = park[row].indexOf("S");

  // routes를 forEach() 메서드를 이용해 요소를 하나씩 확인한다.
  routes.forEach((position) => {
    // 요소를 빈칸 기준으로 나눠준다. (구조분해할당을 이용)
    // d = "E" / n = "2"
    const [d, n] = position.split(" ");

    // 임시 좌표를 만들어주고 flag도 하나 만들어준다.
    let tempRow = row;
    let tempCol = col;
    let flag = true;

    // 구한 이동거리 수 만큼 for문을 돌려준다.
    for (let i = 0; i < Number(n); i++) {
      // 동서 쪽 일 경우 행을 더하거나 빼주고
      // 남북 쪽 일 경우 열을 더하거나 빼준다.
      if (d === "E") tempCol++;
      else if (d === "W") tempCol--;
      else if (d === "S") tempRow++;
      else if (d === "N") tempRow--;

      // 그 후 행과 열이 공원을 벗어나는지
      // 행과 열의 좌표에 장애물이 없는지를 확인한다.
      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        // 장애물이 있거나 공원을 벗어났다면
        // flag에 false를 넣어주고 break를 통해 for문을 종료시킨다.
        flag = false;
        break;
      }
    }

    // for문을 무사히 통과했다면 이동을 한 것이기 때문에
    // 임시 좌표를 실제 좌표에 대입해준다.
    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  // 다 확인 후 마지막 좌표를 반환한다.
  return [row, col];
}
console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2, 1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0, 1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0, 0]
