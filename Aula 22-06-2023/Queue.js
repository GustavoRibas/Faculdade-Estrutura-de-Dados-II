class Queue {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
  
    enqueue(element) {
      this.items[this.count] = element;
      this.count++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lowestCount];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }
  
    size() {
      return this.count - this.lowestCount;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
  }
  const fila = new Queue()
  fila.enqueue(20)
  fila.enqueue(21)
  fila.enqueue(22)
  fila.enqueue(23)
  fila.enqueue(24)
  fila.enqueue(25)
  fila.enqueue(26)
  fila.enqueue(27)
  console.log(fila.items)
  console.log(fila)
  fila.dequeue()
  console.log(fila.items)
  console.log(fila)