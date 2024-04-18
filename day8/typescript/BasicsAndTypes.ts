// //strings
// var myName = 'Max';
// //numbers
// var myAge = 27; 
// //booolean
// var hasHobbies = false;
// //assign types
// //let myRealAge; //it has type of 'any'
// var myRealAge;
// myRealAge = 27;
// //array
// var hobbies = ['Cricket', 'Sports'];
// console.log(typeof hobbies);
// // allowed in this  case hobbies = [100,200] 
// var hobbies1 = ['Cricket', 'Sports'];
// console.log(typeof hobbies1);
// // not allowed in this  case hobbies = [100,200] 
// //tuples is mixed type array
// var address = ["51 Street", 99]; //restricing that first number will be string and second number.
// // enum, feature to make number more expressive
// var Color;
// (function (Color) {
//     Color[Color["Gray"] = 0] = "Gray";
//     Color[Color["Green"] = 100] = "Green";
//     Color[Color["Blue"] = 101] = "Blue"; //101
// })(Color || (Color = {}));
// ;
// var myColor = Color.Green;
// console.log(myColor);
// myColor = Color.Blue;
// console.log(myColor);
// // any
// var car = "BMW";
// console.log(car);
// car = { brand: "BMW", series: 3 };
// console.log(car);
// //functions
// function returnMyName() {
//     return myName;
// }
// console.log(returnMyName());
// //void 
// function sayHello() {
//     console.log("Hello");
// }
// //argument types fixing the type of args
// function multiply(val1, val2) {
//     return val1 * val2;
// }
// //function types
// var myMultiply; //fixing the type of variable  
// //which type of functions it can store according to arguments and return type
// // give error myMultiply = sayHello;
// //myMultiply();
// myMultiply = multiply; //best match for myMultiply
// console.log(myMultiply(5, 2));
// // objects
// var userData = {
//     name: "Daksh",
//     age: 19 //number type
// };
// // give error userData = {};
// // give error userData = {
// //	a: "Hello",
// //	b: 22
// // };
// //complex type mixins of everything
// var complex = {
//     data: [100, 3.99, 10],
//     output: function (all) {
//         return this.data;
//     }
// };
// var complex2 = {
//     data: [100, 3.99, 10],
//     output: function (all) {
//         return this.data;
//     }
// };
// // union types
// var myRealRealAge = 27;
// myRealRealAge = "27";
// myRealRealAge = 27;
// // give error myRealRealAge = true;
