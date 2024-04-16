## what is javascript?

JavaScript is a high-level, interpreted programming language used to make web pages interactive. It allows you to dynamically update content, control multimedia, and animate elements on web pages. 

// Example of JavaScript code
let greeting = "Hello!";
console.log(greeting);

## What is the difference between b/w let and var?

The main difference between let and var in JavaScript is their scope and hoisting behavior. let has block scope, meaning it's limited to the block (like inside a loop or an if statement) where it's defined. var has function scope, so it's accessible throughout the function where it's declared, regardless of block boundaries. Additionally, let is not hoisted to the top of its block, unlike var.

// Using let
function example() {
    if (true) {
        let x = 10;
        console.log(x); // Output: 10
    }
    console.log(x); // Error: x is not defined (because of block scope)
}

// Using var
function example() {
    if (true) {
        var y = 20;
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 20 (because of function scope)
}

## Why do we prefer const over var?

We prefer const over var for declaring variables in JavaScript because const provides immutable bindings, meaning the variable cannot be reassigned after initialization. This helps prevent accidental reassignments and promotes safer, more predictable code. It also clarifies the developer's intent to maintain the value unchanged.

const PI = 3.14;
PI = 3.14159; // Error: Assignment to constant variable

const user = { name: 'John', age: 30 };
user.age = 31; // Allowed: Modifying properties of a const object

## What is the use of javascript in web browsers?

JavaScript is used in web browsers to make web pages interactive and dynamic. It allows developers to manipulate the HTML and CSS of a webpage, handle user events (like clicks and keystrokes),and update content without reloading the entire page (via DOM manipulation). 

## What are Objects?

objects are complex data structures used to store collections of related data and functionality. They consist of key-value pairs where keys (also called properties) are strings (or symbols) and values can be any data type, including primitive types, arrays, or even other objects.

// Example of an object representing a person
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person.name); // Output: "John"
console.log(person.age); // Output: 30
console.log(person.city); // Output: "New York"

## What is an array and how is it different from an Object in Javascript?

An array in JavaScript is a special type of object that stores a collection of elements (values or references) in a linear fashion. Each element in an array is identified by an index starting from zero. 
The main difference between an array and an object in JavaScript is how they store and organize data. Arrays use numeric indices to access elements sequentially, while objects use keys (strings or symbols) to access properties in a more flexible and unordered manner.

// Example of an array
let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]); // Output: "apple"
console.log(fruits.length); // Output: 3

// Example of an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person.name); // Output: "John"
console.log(person.age); // Output: 30

## What is a function?

A function in JavaScript is a block of reusable code that performs a specific task.Functions can take parameters as inputs, perform computations, and return a result. They are used to organize code into manageable and reusable units.

function square(num) {
    return num * num;
}

let result = square(5); // result will be 25

## How can we implement call by value and call by reference in Javascript?

primitive data types like numbers and strings are passed by value, meaning a copy of the value is passed to functions. Changes made inside the function do not affect the original value.

function increment(x) {
    x = x + 1;
    return x;
}

let num = 5;
console.log(increment(num)); // Output: 6
console.log(num); // Output: 5 (original value remains unchanged)

Objects and arrays in JavaScript are passed by reference, meaning the memory address (reference) of the object/array is passed to functions. Changes made inside the function affect the original object/array.

function addItem(arr, item) {
    arr.push(item);
}

let myArray = [1, 2, 3];
addItem(myArray, 4);
console.log(myArray); // Output: [1, 2, 3, 4] (original array is modified)

## What are the primitive data types in Javascript?

Number, String, Boolean, Undefined, Null, Symbol, BigINT.

## What is DOM?

The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of HTML or XML documents as a tree-like structure where each node represents a part of the document (like elements, attributes, and text). JavaScript can interact with the DOM to dynamically update and manipulate the content, structure, and style of web pages.

<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1>Hello, DOM!</h1>
    <p>This is a paragraph.</p>

    <script>
        // JavaScript code to interact with DOM
        document.getElementById('heading').textContent = 'Welcome to DOM!';
    </script>
</body>
</html>

## Why do we need DOM?

We need the DOM (Document Object Model) in web development because it provides a structured representation of HTML documents that can be manipulated and interacted with using JavaScript. This allows developers to dynamically update content, respond to user actions, and create interactive web applications without reloading the entire page. For example, we can use DOM methods like getElementById to select specific elements and modify their properties or content based on user input or application logic.