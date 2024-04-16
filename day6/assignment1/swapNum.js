function swapNumbersByReference(obj, key1, key2) {
  if (obj.OwnProperty(key1) && obj.OwnProperty(key2)) {
    [obj[key1], obj[key2]] = [obj[key2], obj[key1]];
  }
}

let numbers = { a: 5, b: 10 };
console.log("Before swap:", numbers); 

swapNumbersByReference(numbers, "a", "b");
console.log("After swap:", numbers); 
