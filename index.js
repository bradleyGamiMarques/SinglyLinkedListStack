/* eslint-disable require-jsdoc */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// Demonstrate the LIFO nature of a stack by entering a friendly message.
const stack = new Stack();
stack.push('!');
stack.push('World');
stack.push('Hello');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
