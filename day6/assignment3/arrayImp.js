class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastElement;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return undefined;

    const deletedElement = this.data[index];
    this.shiftItems(index);
    return deletedElement;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new Array();
myArray.push("a");
myArray.push("b");
myArray.push("c");
console.log(myArray); 

console.log(myArray.get(1));

console.log(myArray.pop()); 

myArray.push("d");
console.log(myArray); 

console.log(myArray.delete(1));
console.log(myArray); 
