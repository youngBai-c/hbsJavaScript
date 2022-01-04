class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.next = newNode;
    this.tail = this.next;
    this.length = 1;
  }
}

let myLinkedList = new LinkedList(3);
console.log(myLinkedList);
