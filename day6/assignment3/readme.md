## Explain as much as you know about objects in javascript? 

In JavaScript, objects are fundamental data structures used to store collections of related data and functionality. They are made up of key-value pairs where keys are strings (or symbols) and values can be any data type, including primitive types (like numbers and strings), arrays, functions, or even nested objects. 

// example 1
let person = {
    name: "Nikhil",
    age: 20,
    city: "Jaipur"
};

console.log(person.name); 
console.log(person.age); 

// example 2
let car = {
    make: "Honda",
    model: "Civic",
    year: 2020,
    getInfo: function() {
        return `${this.make} ${this.model} (${this.year})`;
    },
    owner: {
        name: "Nikhil",
        age: 20
    }
};

console.log(car.getInfo()); 
console.log(car.owner.name); 

//example 3
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.identity = function() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

let person1 = new Person("Nikhil", 20);
let person2 = new Person("Bharti", 23);

console.log(person1.identity()); 
console.log(person2.identity()); 

## Read the code :
// This is an object based vector template
var vector = {
_x: 0,
_y: 0,
create: function(x,y){
var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
},
}
Can you make a “class” based alternative to it? Using Javascript OOP features

// Class-based Vector implementation
class Vector {
    constructor(x, y) {
        this._x = x || 0; 
        this._y = y || 0; 
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    static create(x, y) {
        return new Vector(x, y);
    }
}

let vec1 = new Vector(3, 4);
console.log(vec1.x); // Output: 3
console.log(vec1.y); // Output: 4

let vec2 = Vector.create(-1, 2);
console.log(vec2.x); // Output: -1
console.log(vec2.y); // Output: 2

## Do you think javascript is the language of the future?

yes,
1)JavaScript is the native language of the web, and the web is rapidly expanding.
2)Because of this, JavaScript is receiving a tremendous amount of attention from developers who are improving its performance and expanding its functionality.