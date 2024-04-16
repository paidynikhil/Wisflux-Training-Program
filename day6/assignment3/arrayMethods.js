// ForEach.
function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr); 
  }
}

const number = [7,8,6,5,3,4];
customForEach(number, (element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// Map
function customMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr)); // new element
    }
    return mappedArray;
}
const number1 = [1, 2, 3, 4];
const doubledNumbers = customMap(number1, (element) => {
    return element * 2;
});
console.log(doubledNumbers);

// Filter
function customFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const number2 = [3,4,5,6];
const evenNumbers = customFilter(number2, (element) => {
    return element % 2 === 0;
});
console.log(evenNumbers);

// Reduce
function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

const number3 = [1, 2, 3, 4];
const sum = customReduce(number3, (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 10

// include
function customIncludes(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

const number4 = [1, 2, 3, 4];
console.log(customIncludes(number4, 3)); // true
console.log(customIncludes(number4, 5)); // false

// Some
function customSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const number5 = [1, 2, 3, 4];
const hasEvenNumber = customSome(number5, (element) => {
    return element % 2 === 0;
});
console.log(hasEvenNumber); // true

// Every
function customEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

const number6 = [1, 2, 3, 4];
const allEvenNumbers = customEvery(number6, (element) => {
    return element % 2 === 0;
});
console.log(allEvenNumbers); // false (not all numbers are even)
