// Array로 구현 하는 큐 -  front와 rear가 무한정으로 커질수 있다는 단점이 있음

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    // this.queue[this.rear] = item
    // this.rear += 1

    this.queue[this.rear++] = item; // 위의 두줄을 한줄로 표현
  }

  dequeue() {
    const item = this.queue[this.front]; // front가 가리키는 인덱스의 값을 item에 할당
    delete this.queue[this.front]; // delete는 해당 인덱스의 값을 삭제만 하고 배열의 길이는 변하지 않음
    this.front += 1; // front를 1 증가 시켜줌으로써 다음번에 dequeue를 할때 다음 인덱스의 값을 가져옴
    return item;
  }

  peek() {
    // front가 가리키는 인덱스의 값을 반환
    return this.queue[this.front];
  }

  size() {
    // rear - front를 하면 현재 큐의 길이를 구할 수 있음
    return this.rear - this.front;
  }
}

// Linked List로 구현 하는 큐
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(newItem) {
    // 새로운 아이템을 큐의 rear에 추가 - 연결리스트의 append 함수와 유사
    const newNode = new Node(newItem);
    if (this.front === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    // 큐의 front에 있는 아이템을 삭제 - 연결리스트의 pop과 같음
    const item = this.front.item;
    this.front = this.front.next;
    this.size -= 1;
    return item;
  }

  peek() {
    // front가 가리키는 아이템을 반환
    return this.front.item;
  }
}

// shift 함수는 쓰지 말것! - 배열의 길이가 길어질수록 shift 함수의 속도가 느려짐
// shift 함수는 배열의 길이를 1 줄이고, 모든 인덱스를 1씩 앞으로 당기는 작업을 하기 때문에 배열의 길이가 길어질수록 시간이 오래 걸림
