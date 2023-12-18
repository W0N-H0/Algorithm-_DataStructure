class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node(); // root node 빈 루트 생성
  }

  // 문자열 추가
  insert(string) {
    let currentNode = this.root; // 루트 노드를 현재 노드로 설정

    for (const char of string) {
      // 문자열을 순회하면서
      if (!currentNode.children.has(char)) {
        // 현재 노드의 자식 노드에 현재 문자가 없다면
        currentNode.children.set(char, new Node(currentNdoe.value + char)); // 현재 문자를 value로 갖는 새로운 노드를 생성하여 자식 노드로 추가
      }
    }
    currentNode = currentNode.children.get(char); // 현재 노드를 자식 노드로 변경
  }

  // 문자열이 존재하는지 확인
  has(string) {
    let currentNode = this.root; // 루트 노드를 현재 노드로 설정

    for (const char of string) {
      // 문자열을 순회하면서
      if (!currentNode.children.has(char)) {
        // 현재 노드의 자식 노드에 현재 문자가 없다면
        return false; // false 반환
      }
      currentNode = currentNode.children.get(char); // 현재 노드를 자식 노드로 변경
    }
    return true; // 문자열이 존재하면 true 반환
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat")); // true
console.log(trie.has("can")); // true
console.log(trie.has("cas")); // false
