//array
// var fruits = ["apple", "banana", "graphes", "mango"]
// var cityOne = fruits[0];
// var cityTwo = fruits[2];
// var [cityOne, cityTwo, ...restCitites] = fruits

// console.log(cityOne);
// console.log(cityTwo);
// console.log(restCitites);

//object
// let obj = {
//   name: "wisflux",
//   add: {
//     country: "india",
//     state: {
//       code: "js",
//       pincode: 303012,
//       article: {
//         topic:"destructuring"
//       }
//     }
//   }
// }
// let {name}  = obj;
// console.log(name)

// let { add:{state: {pincode}}}= obj;
// console.log(pincode)

//rest and spread operators.

// function printArgs(...args){
//   console.log(...args);
// }
// printArgs(1, 2, 3, 4, 5);

// let arr = [3, 4, 23, 4, 67]
// let [a, b, ...rest] = arr
// console.log(a, b)
// console.log(...rest)

// const array1 = [1, 2, 3]
// const newArray = [...array1]

// const array2 = [...array1, 4, 5, 6]
// console.log(array2)
// console.log(array1)

// const obj = {
//   name: "nikhil",
//   age:20
// }
// const obj2 = {
//   ...obj
// }
// console.log(obj2)

// const obj3 = { ...obj2, internship: "wisflux" };
// console.log(obj3)

// let sum = () => {
//   console.log("sum");
// };
// let sub = () => {
//   console.log("sub");
// };

// setTimeout(sum, 200);

// sub();

