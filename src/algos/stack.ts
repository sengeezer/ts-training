// Last In First Out (LIFO) implementation with key operations
class Stack<T> {
  // data structure implemented via array
  private data: T[] = [];
  push(item: T): void {
    this.data.push(item);
  }
  // returns undefined if no items left
  pop(): T | undefined {
    return this.data.pop();
  }
  size(): number {
    return this.data.length;
  }
}