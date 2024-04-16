## Why do we use functions in JavaScript?

unctions in JavaScript are used to organize reusable blocks of code. They promote code reusability, modularity, and maintainability by allowing us to define specific tasks or operations that can be executed multiple times with different inputs.

function calculateArea(length, width) {
    return length * width;
}

let area1 = calculateArea(5, 3); // Calculates area of a rectangle with length 5 and width 3
let area2 = calculateArea(4, 6); // Calculates area of a rectangle with length 4 and width 6

## What is Function Invocation?

Function invocation refers to the process of calling a function in JavaScript. This involves using the function's name followed by parentheses `()` containing any necessary arguments or parameters.

## Does a function behave like an object in Javascript? Prove it by an example.

Yes, in JavaScript, functions are a special type of object. They can have properties and methods just like any other object in JavaScript. 

// Define a function
function person(name) {
    return `Hello, ${name}!`;
}

person.language = 'Telugu';

person.sayHello = function() {
    return 'Hello!';
};
console.log(person('nikhil')); // Output: "Hello, nikhil!"
console.log(person.language); // Output: "Telugu"
console.log(person.sayHello()); // Output: "Hello!"


## What are Events in Javascript?


Events in JavaScript are actions or occurrences that happen in the browser, such as clicking a button, hovering over an element, or loading a webpage.

// Adding a click event listener to a button element
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button clicked!');
});


## What is a string?

A string in JavaScript is a sequence of characters enclosed in single (' ') or double (" ") quotes. It represents textual data and can include letters, numbers, symbols, and spaces. Strings are immutable, meaning once created, they cannot be changed directly.

let name = "Paidy Nikhil!";
console.log(name); 

## What is an array? Is it static or dynamic in Javascript?

An array in JavaScript is a data structure used to store a collection of elements, such as numbers or strings. It is dynamic in JavaScript, meaning its size can change dynamically at runtime by adding or removing elements using array methods like push, pop, splice, etc.

## Difference between Map and Set?

Map:
*Maps are collections of key-value pairs where each key can be any value.
*They allow you to associate values with keys and provide methods to manipulate and iterate over entries based on keys.

let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // Output: "John"
console.log(myMap.size); // Output: 2

Set:
*Sets are collections of unique values (no duplicates) where each value can occur only once.
*They are useful for storing a list of distinct items and provide methods for adding, removing, and checking the presence of elements.

let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10); // Duplicate values are ignored

console.log(mySet.has(20)); // Output: true
console.log(mySet.size); // Output: 2

## Difference between Array and Map?

Array:
*Arrays are ordered collections of elements indexed by numerical indices.
*Elements in arrays can be accessed and manipulated using their index positions, and arrays allow duplicate values.

let myArray = [10, 20, 30, 40];
console.log(myArray[0]); // Output: 10
console.log(myArray.length); // Output: 4

## What are array methods? List a few names?
 
It is used to manipulate arrays easily.
push, pop, forEach, filter, map. are few methods.

## In how many ways can we traverse through an array in Javascript?

several way's:
filter(), reduce(), for Loop, forEach(), map etc.