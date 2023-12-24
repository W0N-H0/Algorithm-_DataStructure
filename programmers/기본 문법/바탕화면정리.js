function solution(wallpaper) {
  // 최소 x, y 좌표를 배열의 길이로 초기화하고, 최대 x, y 좌표를 0으로 초기화
  let lux = wallpaper.length,
    luy = wallpaper[0].length,
    rdx = 0,
    rdy = 0;

  // 바탕화면의 모든 칸을 순회하면서 파일(#)을 찾기
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      // 파일을 찾은 경우
      if (wallpaper[i][j] === "#") {
        // 파일의 위치를 기준으로 최소 x, y 좌표와 최대 x, y 좌표를 갱신
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);
        rdx = Math.max(rdx, i);
        rdy = Math.max(rdy, j);
      }
    }
  }

  // 최소 x, y 좌표와 최대 x, y 좌표를 반환
  // 여기서 rdx와 rdy에 +1을 해주는 이유는 문제에서 지정한 드래그 거리 계산 방식 때문
  // 시작점(lux, luy)에서 끝점(rdx, rdy)까지의 거리를 계산할 때, 끝점을 포함하기 때문에 +1을 해줌
  return [lux, luy, rdx + 1, rdy + 1];
}

console.log(solution([".#...", "..#..", "...#."]));
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
