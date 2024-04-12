//A function is a block of code that performs a certain task when called.

// function
function Name(name) {
    console.log('Hi' + ' ' + name);
}

Name('Nikhil'); // Hi Nikhil

//In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function

//example 1

function person(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

person('Nikhil', callMe);

//output: Hi Nikhil
//        I am callback function


//The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.

// example 2
function main() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(main, 2000);
sayName('Nikhil');
//output: Hello Nikhil
//        Hello world


//example 3
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(greet, 2000, 'John', sayName);


//example 4

function callbackFunction(element, index, array) {
    
    
    // check that element is a string
    const isNotString = typeof element !== "string";
    // if it's not, end function
    if (isNotString) {
        return;
    }
    
    
    // check that string is 3 characters long and only uppercase letters
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // otherwise, end function
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
    
    // check if all characters are different
    const allDifferentCharacters = element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2];
    // if not, return to stop the function
    if (!allDifferentCharacters) {
        return;
    }
    
    
    // check if it's the first appearence of element inside the array
    const isItFirstAppearence = array.indexOf(element) === index;
    // if not, return to stop the function
    if (!isItFirstAppearence) {
        return;
    }
    
    
    return true;
}

// example 5

var numbers = [1, 2, 3, 4, 5];

function mainFunction(callback) {
  console.log("Performing operation...");

  numbers.forEach(callback);
}

function callbackFunction(number) {
  console.log("Result: " + number);
}

mainFunction(callbackFunction);

// example 6

function mainFunction(callback) {
  console.log("Performing operation...");
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}


mainFunction(callbackFunction);
