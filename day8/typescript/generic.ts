"use strict";
//simple generic
function echo(data) {
  return data; 
}
console.log(echo("Daksh"));
console.log(echo(45).length); 

console.log(echo({ age: 29, name: "Daksh" }));

//Better Generic
function betterEcho(data) {
  return data;
}
console.log(betterEcho("Daksh"));

console.log(betterEcho(45)); 

console.log(betterEcho({ age: 29, name: "Daksh" }));

//Built-in Generics
var testResults = [1.94, 2.33]; 
testResults.push(-2.33); 

//Arrays
function printAll(args) {
  args.forEach(function (element) {
    return console.log(element);
  });
}
printAll(["Apple", "Banana"]);

//Generic Classes
var SimpleMath = /** @class */ (function () {
  function SimpleMath(baseValue, multiplyValue) {
    this.baseValue = baseValue;
    this.multiplyValue = multiplyValue;
  }
  SimpleMath.prototype.calculate = function () {
    return +this.baseValue * +this.multiplyValue; //+ sign for typecasting
  };
  return SimpleMath;
})();
var simpleMathNum = new SimpleMath(10, 20);
console.log(simpleMathNum.calculate());

var simpleMathStr = new SimpleMath("10", "20");
console.log(simpleMathStr.calculate());

//multiple generic
var SimpleMathMulti = /** @class */ (function () {
  function SimpleMathMulti(baseValue, multiplyValue) {
    this.baseValue = baseValue;
    this.multiplyValue = multiplyValue;
  }
  SimpleMathMulti.prototype.calculate = function () {
    return +this.baseValue * +this.multiplyValue; //+ sign for typecasting
  };
  return SimpleMathMulti;
})();
var simpleMathMulti = new SimpleMathMulti("10", 20);
console.log(simpleMathMulti.calculate());
