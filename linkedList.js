// 연결 리스트

// 노드 클래스와 단일 연결 리스트 클래스로 구성된다.

class Node {
  constructor(value) {
    // 노드 생성자 함수는 값과 포인터로 구성되어 있다.
    this.value = value;
    this.next = null; // 노드가 생성되는 시점에는 다음 노드를 가리키는 포인터는 null이다. (= 아무것도 가르키지 않는다.)
  }
}

class SinglyLinkedList {
  // 단일 연결 리스트는 head와 tail 포인터로 구성되어 있다.
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 찾기 로직
  find(value) {
    let currentNode = this.head; // currentNode라는 변수를 생성하고 head를 할당한다.

    while (currentNode.value !== value) {
      // currentNode의 값이 찾고자 하는 값과 같을 때까지 반복한다.
      currentNode = currentNode.next;
    }
    return currentNode; // 찾고자 하는 값을 찾으면 해당 노드를 반환한다.
  }

  // 추가 로직
  // 끝 부분에 추가하는 append 로직과,
  // 중간에 추가하는 insert 로직이 있다.

  append(newValue) {
    // 새로운 노드를 생성하고 tail의 next에 새로운 노드를 할당한다. 그리고 tail을 새로운 노드로 할당한다.
    const newNode = new Node(newValue); // 받은 값을 그대로 사용하여 새로운 노드를 생성한다.
    if (!this.head) {
      // head가 없다면 연결리스트에 아무런 값이 없다는 뜻이기 때문에,
      this.head = newNode;
      this.tail = newNode; // head와 tail을 새로운 노드로 할당한다.
    } else {
      // head가 있다면,
      this.tail.next = newNode;
      this.tail = newNode; // tail의 next에 새로운 노드를 할당하고, tail을 새로운 노드로 할당한다.
    }
  }

  insert(node, newValue) {
    // node는 삽입할 위치를 가리키는 포인터이다.
    const newNode = new Node(newValue); // 받은 값을 그대로 사용하여 새로운 노드를 생성한다.
    newNode.next = node.next; // 새로운 노드의 next에 node의 next를 할당한다.
    node.next = newNode; // node의 next에 새로운 노드를 할당한다.
  }

  // 삭제 로직
  remove(value) {
    let prevNode = this.head; // 삭제할 노드의 이전 노드를 찾기 위해, prevNode라는 변수를 생성하고 head를 할당한다.
    while (prevNode.next.value !== value) {
      // prevNode의 next의 값이 찾고자 하는 값과 같을 때까지 반복한다.
      prevNode = prevNode.next; // prevNode의 next를 prevNode에 할당한다.
    }

    if (prevNode.next !== null) {
      // prevNode의 next가 null이 아니라면,
      prevNode.next = prevNode.next.next; // prevNode의 next에 prevNode의 next의 next를 할당한다.
    }
  }
}
