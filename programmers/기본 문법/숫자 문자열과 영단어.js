// [문제 이름]
// : 숫자 문자열과 영단어

// [문제 설명]
// : 숫자의 일부 자릿수를 영단어로 바꾸기
//    1478 → "one4seveneight"
//    234567 → "23four5six7"
//    10203 → "1zerotwozero3"

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let wordToNumber = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  //s 문자열의 영단어를 조회하기위해 비어있는 currentWord 변수 선언
  // 결과를 담아둘 변수 선언
  let currentWord = "";
  let result = "";

  // 반복문을 돌며, 숫자가 아닌경우 => 영단어를 저장해 나가기
  for (let i = 0; i < s.length; i++) {
    // 숫자가 아닌지 판별하는 함수  숫자o false /  숫자x true
    if (isNaN(s[i])) {
      currentWord = currentWord + s[i]; // 숫자가 아닌경우 현재단어에 영단어를 저장해 나가기

      // 영단어를 저장해 나가는 중 현재의영단어가 wordToNumber 객체의 프로퍼티가 존재하는 경우에 result에 저장
      if (wordToNumber[currentWord]) {
        result = result + wordToNumber[currentWord];
        currentWord = ""; // 완성된 영단어가 있을때 currentWord 초기화 시켜주기
      }
    } else {
      // 첫번재 if문의 else임
      // 숫자일 경우 걍 더하기
      result = result + s[i];
    }
  }

  return parseInt(result);
}

console.log(solution("one4seveneight"));
console.log(solution("2three45sixseven"));
