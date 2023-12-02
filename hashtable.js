// 1. 같은 장르끼리 묶어서 배열에 담는다.
// 2. 장르별 총 재생횟수를 구한다.
// 3. 재생횟수가 많은 장르 순으로 정렬한다.
// 4. 장르 내에서 재생횟수가 많은 노래 순으로 정렬한다.
// 5. 장르별로 2개씩 베스트 앨범에 담는다. (= 2개씩 자른다.)

// 핵심 키워드: '묶는 것', '정렬', '자르는 것'

function solution(genres, plays) {
  const genresMap = new Map(); // 장르별 총 재생횟수를 구하기 위한 Map

  genres
    .map((genre, index) => [genre, plays[index]]) // 장르와 인덱스를 묶어서 배열로 만든다.]))
    .forEach(([genre, play], index) => {
      const data = genresMap.get(genre) || { total: 0, songs: [] }; // 장르별로 묶기 위한 데이터를 만든다.
      genresMap.set(genre, {
        total: data.total + play, // 장르별 총 재생횟수
        songs: [...data.songs, { index, play }] // 장르별 노래들
          .sort((a, b) => b.play - a.play) // 재생횟수가 많은 순으로 정렬
          .slice(0, 2), // 장르별로 2개씩만 자른다.
      });
    });

  return [...genresMap.entries()]
    .sort((a, b) => b[1].total - a[1].total) // 장르별 총 재생횟수가 많은 순으로 정렬
    .flatMap((item) => item[1].songs.map((song) => song.index)); // 장르별로 2개씩 자른 노래들의 인덱스를 하나의 배열로 만든다.
}
