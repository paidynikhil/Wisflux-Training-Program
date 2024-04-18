## 1)Basic data types in TypeScript:
TypeScript includes basic data types like number, string, boolean, null, undefined, symbol, and any. Additionally, TypeScript introduces advanced types such as array, tuple, enum, object, and void to enhance type safety.

## 2)Generic data type:
Generics in TypeScript allow you to create reusable components that work with a variety of data types. They enable you to define types that can work on different data structures while maintaining type safety and flexibility.

## 3)Type inferring in TypeScript:
Type inference in TypeScript is the ability of the compiler to automatically determine the type of a variable based on its initialization value. This helps in reducing the need for explicit type annotations while still providing type safety.

## 4)Defining typing for functions:
TypeScript provides several ways to define typing for functions:
Using parameter types: function add(a: number, b: number): number { return a + b; }
Specifying return type: function greet(name: string): string { return "Hello, " + name; }
Using arrow functions with type annotations: const multiply = (x: number, y: number): number => x * y;

## 5)Defining Generic type for Classes:
You can define generic types for classes in TypeScript using angle brackets (<>) to specify type parameters:
code:
class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

let numberBox = new Box<number>(10);
let stringBox = new Box<string>("Hello");

console.log(numberBox.getItem()); // Output: 10
console.log(stringBox.getItem()); // Output: "Hello"
In this example, Box<T> is a generic class where T is the type parameter that can be replaced with any type (number, string, etc.) when creating instances of Box.
