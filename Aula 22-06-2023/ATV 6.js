//Remova o elemento no topo da pilha usando o método "pop"
class Stack {
    constructor() {
      this.count = 0;
      this.items = {};
    }
    push(element) {
      this.items[this.count] = element;
      this.count++;
    }
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
    
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.count - 1];
    }
    isEmpty() {
      return this.count === 0;
    }
    size() {
      return this.count;
    }
    clear() {
      /* while (!this.isEmpty()) {
          this.pop();
        } */
      this.items = {};
      this.count = 0;
    }
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[0]}`;
      for (let i = 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
  }
  const atv1 = new Stack ()
  atv1.push (1)
  atv1.push (2)
  atv1.size ()
  atv1.isEmpty ()
  const atv1Topo = atv1.peek ()
  console.log("Topo: " + atv1Topo)
  const atv1Removido = atv1.pop()
  console.log("Removido: " + atv1Removido)