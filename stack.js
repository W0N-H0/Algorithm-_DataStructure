// 프로그래머스 코딩 테스트

// 올바른 괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
//
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
//
// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false
// 입출력 예 설명
// 입출력 예 #1,2,3,4
// 문제의 예시와 같습니다.

// 풀이 1 - stack

function solution(s) {
  const stack = [];

  for (let c of s) {
    if (c === "(") {
      // 여는 괄호일 경우
      stack.push(c); // 스택에 추가
    } else {
      // 닫는 괄호일 경우
      if (stack.length === 0) {
        // 스택이 비어있으면 false
        return false;
      }
      stack.pop(); // 스택에서 제거
    }
  }
  return stack.length === 0; // 스택이 비어있으면 (,)가 쌍으로 제거 된것이니 true, 아니면 false
}

// 풀이 2
function solution(s) {
  let count = 0;

  for (let c of s) {
    if (c === "(") {
      // 여는 괄호일 경우
      count += 1;
    } else {
      // 닫는 괄호일 경우
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}
