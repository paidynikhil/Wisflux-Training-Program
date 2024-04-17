1. Anonymous functions in JavaScript are functions without a name. They are often used as arguments to other functions or as immediately invoked function expressions.
   ```javascript
   let myFunction = function() {
       console.log("This is an anonymous function.");
   };
   ```

2. Strict comparison (`===`) in JavaScript checks for both value and type equality, ensuring that both operands are of the same type without type coercion. Abstract comparison (`==`) performs type coercion if the operands are of different types before checking for equality.
   ```javascript
   console.log(5 === '5'); // Output: false (strict comparison)
   console.log(5 == '5'); // Output: true (abstract comparison with type coercion)
   ```

3. Arrow functions in JavaScript are concise syntax for writing functions, with implicit return and lexical `this` binding. They are anonymous by default and cannot be used as constructors. Regular functions have more flexibility, support named declarations, and have their `this` context determined by how they are called.
   ```javascript
   // Arrow function
   let arrowFunction = () => console.log("Arrow function");

   // Regular function
   function regularFunction() {
       console.log("Regular function");
   }
   ```

4. Hoisting in JavaScript refers to the mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, allowing variables to be used before they are declared.
   ```javascript
   console.log(x); // Output: undefined (variable is hoisted)
   var x = 5;
   ```

5. JavaScript is garbage collected, meaning it automatically manages memory by identifying and removing unused objects to free up memory space. This is achieved through automatic memory allocation and deallocation by the JavaScript engine's garbage collector, which periodically checks for unreferenced objects and removes them from memory.
   
6. Shallow copy in JavaScript creates a new object or array and copies only the references to nested objects or arrays. Deep copy, on the other hand, recursively copies all nested objects and arrays, creating distinct copies in memory.
   
7. `Object.freeze` in JavaScript is a method used to freeze an object, preventing its properties from being added, modified, or removed. It creates an immutable version of the object, ensuring its state remains unchanged.
   ```javascript
   const obj = { name: "nikhil" };
   Object.freeze(obj);
   obj.name = "bharti"; // No effect, as the object is frozen
   ```