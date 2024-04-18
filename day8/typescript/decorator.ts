// // class decorator
// function logged(constructorFn) {
//   console.log(constructorFn);
// }
// var Person1 = /** @class */ (function () {
//   function Person1() {
//     console.log("HI There");
//   }
//   Person1 = __decorate([logged], Person1);
//   return Person1;
// })();
// //Factory
// function logging(value) {
//   return value ? logged : null;
// }
// var Car = /** @class */ (function () {
//   function Car() {}
//   Car = __decorate([logging(true)], Car);
//   return Car;
// })();

// //Advanced
// function printable(constructorFn) {
//   constructorFn.prototype.print = function () {
//     console.log(this);
//   };
// }
// var Plant1 = /** @class */ (function () {
//   function Plant1() {
//     this.name = "Green Plant";
//   }
//   Plant1 = __decorate([logging(false), printable], Plant1);
//   return Plant1;
// })();
// var plant1 = new Plant1();
// plant1.print();

// function editable(value) {
//   return function (target, propName, descriptor) {
//     descriptor.writable = value; 
//   };
// }
// function overwritable(value) {
//   return function (target, PropName) {
//     var newDescriptor = {
//       writable: value,
//     };
//   };
// }
// var Project1 = /** @class */ (function () {
//   function Project1(name) {
//     this.projectName = name;
//   }
//   Project1.prototype.calcBudget = function () {
//     console.log(1000);
//   };
//   __decorate([overwritable(true)], Project1.prototype, "projectName", void 0);
//   __decorate([editable(true)], Project1.prototype, "calcBudget", null);
//   return Project1;
// })();
// var project = new Project1("Super Project");
// project.calcBudget();
// project.calcBudget = function () {
//   console.log(2000);
// };
// project.calcBudget();

// //parameter Decorator
// function printInfo(target, methodName, paramIndex) {
//   console.log("Target: ", target);
//   console.log("methodName: ", methodName);
//   console.log("paramIndex: ", paramIndex);
// }
// var Course = /** @class */ (function () {
//   function Course(name) {
//     this.name = name;
//   }
//   Course.prototype.printStudentNumber = function (mode, printAll) {
//     if (printAll) {
//       console.log(10000);
//     } else {
//       console.log(2000);
//     }
//   };
//   __decorate(
//     [__param(1, printInfo)],
//     Course.prototype,
//     "printStudentNumber",
//     null
//   );
//   return Course;
// })();
// var course = new Course("Super course");
// course.printStudentNumber("anythiing", true);
// course.printStudentNumber("anything", false);
