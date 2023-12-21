// [문제 이름]
// : 시저 암호

// [문제 설명]
// : 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
//  "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (lowerAlphabet.includes(char)) {
      let index = (lowerAlphabet.indexOf(char) + n) % 26;
      result += lowerAlphabet[index];
    } else if (upperAlphabet.includes(char)) {
      let index = (upperAlphabet.indexOf(char) + n) % 26;
      result += upperAlphabet[index];
    } else {
      result += char; // 공백이나 다른 문자는 그대로 추가
    }
  }

  return result;
}
console.log(solution("abcf", 1));
console.log(solution("AB", 1));
console.log(solution("a B z", 4));
