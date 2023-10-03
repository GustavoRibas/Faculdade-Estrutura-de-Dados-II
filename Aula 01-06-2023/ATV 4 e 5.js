//ATV 4:
export default class StackArray {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  export function decimalToBinary(decNumber) {
    const remStack = [];
    let number = decNumber;
    let rem;
    let binaryString = '';
  
    while (number > 0) {
      rem = Math.floor(number % 2);
      remStack.push(rem);
      number = Math.floor(number / 2);
    }
  
    while (!remStack.isEmpty()) {
      binaryString += remStack.pop().toString();
    }
  
    return binaryString;
    
  }
//ATV 5: 
const stack = new StackArray();