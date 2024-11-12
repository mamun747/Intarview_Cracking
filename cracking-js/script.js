// step 1 starts

// Question-1: What are the different data types in JavaScript?
/*
Answer: JavaScript has several data types, which can be categorized into two groups: primitive and non-primitive (reference) types.
Primitive Types:
Number: Represents both integer and floating-point numbers (e.g., 42, 3.14).
String: Represents a sequence of characters (e.g., "Hello, world!").
Boolean: Represents a logical value, either true or false.
Undefined: A type with a single value, undefined, indicating a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value, often used to indicate that a variable should be empty.
Symbol: Introduced in ES6, it represents a unique and immutable value often used as object property keys.
BigInt: Represents integers with arbitrary precision, allowing you to work with large integers (e.g., 9007199254740991n).

Non-Primitive (Reference) Types:
Object: The most complex data type, which can hold collections of key-value pairs (e.g., { name: "Alice", age: 25 }).
Array: A special type of object that holds an ordered collection of values (e.g., [1, 2, 3, 4]).
 */


// Question-2: What is the difference between var, let, and const?
/*
Answer: The differences between var, let, and const primarily revolve around their scope, hoisting behavior, and reassignability:

Scope:
var: Has a global scope or function scope. If declared outside any function, it is globally scoped; if declared inside a function, it is scoped to that function.
let: Has a block scope. It is only accessible within the block (enclosed by {}) where it is declared.
const: Also has a block scope and behaves similarly to let but is used to declare constants.

Hoisting:
var: Variables declared with var are hoisted to the top of their scope, meaning they can be used before their declaration, but they will be undefined until initialized.
let: and const: These are also hoisted but not initialized, leading to a "temporal dead zone." Using them before their declaration results in a ReferenceError.

Reassignability:
var: Variables can be redeclared and reassigned within the same scope.
let: Variables can be reassigned but cannot be redeclared in the same scope.
const: Variables cannot be reassigned or redeclared, meaning they must be initialized at the time of declaration and will remain constant throughout their scope. However, if a const variable is an object or array, the contents can still be modified.
 */


// Question-3: Explain JavaScript's == vs. === operators.
/*Answer:
== (Loose Equality): Compares values for equality after converting them to a common type (type coercion). For example, 5 == '5' evaluates to true.
=== (Strict Equality): Compares values without type conversion, requiring both value and type to be the same. For instance, 5 === '5' evaluates to false. */


// Question-4: What is type coercion in JavaScript? Give an example.
/* Answer: Type coercion in JavaScript is the automatic conversion of values from one data type to another during operations. This can occur when using operators or comparing values of different types.
Example:
When adding a number to a string, JavaScript converts the number to a string: 
let result = 5 + '5'; // result is '55' (string)
In this case, the number 5 is coerced to a string, resulting in string concatenation rather than numerical addition.
*/


// Question-5: Explain the concept of scope in JavaScript.
/* Answer: Scope in JavaScript refers to the accessibility or visibility of variables, functions, and objects in certain parts of the code. It determines where a variable can be used and how it can be accessed. There are three main types of scope:

# Global Scope: Variables declared outside of any function or block are globally scoped and can be accessed anywhere in the code.

# Function Scope: Variables declared within a function are only accessible within that function. They cannot be accessed from outside the function.

# Block Scope: Introduced with let and const, block scope limits the visibility of variables to the block (enclosed in {}) in which they are declared, such as within loops or conditionals.
 */


// Question-6: What is hoisting in JavaScript?

/* Answer: Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are actually declared in the code.

# Variable Hoisting: Variables declared with var are hoisted and initialized to undefined, so you can reference them before the declaration without an error, though their value will be undefined.
console.log(x); // undefined
var x = 5;

# Function Hoisting: Function declarations are fully hoisted, allowing you to call a function before its declaration.
greet(); // "Hello"
function greet() {
  console.log("Hello");
}

# let and const: Variables declared with let and const are hoisted but remain uninitialized, leading to a "temporal dead zone" if accessed before the declaration. 
*/

// Question-7: What are template literals, and how are they used?
/*Answer: Template literals are strings enclosed in backticks (`) that allow for easier string interpolation and multi-line strings. They use ${} to embed expressions directly.
Usage examples:
const name = 'Alice';
const greeting = `Hello, ${name}!`; // "Hello, Alice!"
*/

// Question-8: Explain what a higher-order function is in JavaScript.

/* Answer: A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. This allows for more abstract and flexible programming patterns. */


// Question-9: What are arrow functions, and how are they different from regular functions?

/* Answer: Arrow functions are a concise syntax for writing function expressions in JavaScript. They are defined using the => syntax and have some key differences from regular functions: 
# Syntax: Arrow functions are shorter and omit the function keyword.
const add = (a, b) => a + b; // Returns the sum of a and b

# this Binding: Arrow functions do not have their own this context; they inherit this from the enclosing scope. This is useful in callbacks and methods.
Example:-
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // 'this' refers to Timer instance
  }, 1000);
}

*/

// Question-10: What is an Immediately Invoked Function Expression (IIFE)?
/* Answer: An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It helps create a private scope for variables, preventing them from polluting the global scope.
Syntax Example:
(function() {
  console.log('IIFE executed!');
})();

Features:
Encapsulation: Variables inside the IIFE are not accessible outside.
Global Scope Protection: Reduces the risk of variable name conflicts.
 */

// step 1 ends 

// step 2 starts

//Question-1: Explain the concept of closures in JavaScript.
/*
Answer: A closure is a function that remembers its lexical scope, even when the function is executed outside of that scope. This allows the function to access variables from its original environment.
Example:-
function outer() {
  const message = 'Hello';
  return function inner() {
    console.log(message); // Can access 'message' from outer
  };
}
const closure = outer();
closure(); // Outputs: "Hello"
*/

// Question-3: What is the this keyword, and how does it behave in different contexts?
/*
Answer: The this keyword refers to the object on which a function is currently being executed. Its value changes depending on where and how the function is called.
1| Global Context: In the global scope, this refers to the global object (window in browsers).
Example:- 
console.log(this);

2| Object Method: When used in a method, this refers to the object the method belongs to.
Example:-
const obj = {
  name: 'Alice',
  greet() { console.log(this.name); }
};
obj.greet(); // `this` is `obj`, outputs: "Alice"

3| Constructor Function: In a constructor, this refers to the new instance being created.
Example:-
function Person(name) {
  this.name = name;
}
const person = new Person('Bob'); // `this` is the new `person` instance

4| Arrow Functions: Arrow functions do not have their own this; they inherit this from the surrounding scope.
Example:-
const obj = {
  name: 'Alice',
  greet: () => console.log(this.name)
};
obj.greet(); // `this` is not `obj`; `this` refers to the outer scope
*/

// Question-3: How do you create an object in JavaScript?
/* 
Answer: An object in JavaScript can be created using curly braces {} and key-value pairs, like this:
const obj = {
  name: 'mamun',
  age: 'something',
  profession: 'programmer'
}
*/

// Question-4: What is the difference between null and undefined?
/*
Answer: the difference between null and undefined, null is an object and undefined is a data type and when we assign a variable and did not give nothing to the variable it gives us undefined and when we want to take a nothing value sometimes we use the null
Example:-
undefinde:-
let x;
console.log(x); // undefined

null:-
let y = null;
console.log(y); // null
*/

//Question-5:- How do you copy an object in JavaScript? Explain shallow vs. deep copy.
/* Answer:
1| Shallow Copy: Copies only the top-level properties. Changes to nested objects affect both copies.
# Methods: Object.assign() or spread syntax { ...obj } 
Example:-
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };

2| Deep Copy: Copies all levels, creating independent nested objects. Changes to nested objects do not affect each other.
# Methods: JSON.parse(JSON.stringify(obj)) (basic but limited) or structured clone in modern JavaScript.
Example:-
const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj));
*/

// Question-6: Explain how call, apply, and bind work in JavaScript in a simple way.
/*Answer:-
1| call – Calls a function immediately with a specified this value and arguments listed one by one.
Example:-
function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
const person = { name: 'Alice' };
greet.call(person, 'Hello'); // Outputs: "Hello, Alice"

2| apply – Works like call, but takes arguments as an array. It also calls the function immediately.
Example:-
greet.apply(person, ['Hi']); // Outputs: "Hi, Alice"

3| bind – Creates a new function with this set to the provided value. It does not call the function immediately; instead, it returns a new function to call later.
Example:-
const greetPerson = greet.bind(person, 'Hey');
greetPerson(); // Outputs: "Hey, Alice"
*/

// Question-7: What is the prototype chain, and how does inheritance work in JavaScript?
/*
Answer: In JavaScript, the prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Each object has a __proto__ property that points to its prototype, creating a chain until it reaches null.
Example:-
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const dog = new Animal('Dog');
console.log(dog.speak()); // Outputs: "Dog makes a noise."
*/

// step 2 completed

// step 3 starts

// Question-1: What are some common array methods in JavaScript?
/*
Answer: Here are some common array methods in JavaScript:
1| push() – Adds one or more elements to the end of an array.
2| pop() – Removes the last element from an array.
3| shift() – Removes the first element of an array.
4| unshift() – Adds one or more elements to the beginning of an array.
5| map() – Creates a new array by applying a function to each element.
6| filter() – Creates a new array with elements that pass a test.
7| forEach() – Executes a function on each array element, but doesn’t return a new array.
8| reduce() – Reduces the array to a single value based on a function.
*/

// Question-2: How does map() differ from forEach() in arrays?

// Question: How does map() differ from forEach() in arrays?
/*
Answer:
map():
# Creates a new array by applying a function to each element.
# Returns the new array.
# Does not modify the original array.
Example:-
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2); // doubled = [2, 4, 6];

forEach():
# Executes a function on each element of the array but does not return anything.
# does not create a new array.
Example:-
arr.forEach(x => console.log(x)); // Logs: 1, 2, 3
*/

// Question-3: Explain the filter() method. How does it work?
/*
Answer: The filter() method creates a new array containing all the elements that pass a test specified by a function. The original array is not modified.

How it works:

The function provided to filter() is called on each element of the array.
If the function returns true, the element is included in the new array.
If the function returns false, the element is excluded.
Example:-
let arr = [1, 2, 3, 4, 5];
let evenNumbers = arr.filter(x => x % 2 === 0); // [2, 4]
*/


// Question-4: What does the reduce() method do, and how is it used?

/*
Answer: The reduce() method executes a provided function on each element of the array (from left to right), accumulating a single value based on the results of the function.

How it works:

#It takes a callback function with two arguments: an accumulator (which stores the ongoing result) and the current value.
#Optionally, you can provide an initial value for the accumulator.
#The final result is a single value, which could be any data type.
Example:-
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0); // sum = 10
*/

// Question-5: How do you find the length of a string and reverse it?
/*
Answer:
let str = 'Hello';
let length = str.length; // length = 5
1| Finding the length of a string: Use the .length property.
Example:-
let str = 'Hello';
let length = str.length; // length = 5

2| Reversing a string: You can reverse a string by converting it to an array, reversing the array, and then joining it back to a string.
Example:-
let reversed = str.split('').reverse().join(''); // reversed = 'olleH'
*/

// Question-6: What are template literals, and how can they be used for string manipulation?
/* 
Answer: Template literals are a way to define strings using backticks (`). They allow string interpolation (embedding expressions) and multi-line strings.
Example:-
let name = 'Alice';
let greeting = `Hello, ${name}!`; // String interpolation
*/

// Question-7: How do you remove duplicates from an array?
/*
Answer: You can remove duplicates from an array by using a Set. A Set automatically stores only unique values. By converting the array into a Set and then spreading it back into an array, duplicates are removed.
Example:-
let arr = [1, 2, 2, 3, 4, 4];
let uniqueArr = [...new Set(arr)]; // [1, 2, 3, 4];
*/

// step 3 completed

// step 4 starts

// Question-1: How does JavaScript handle implicit type conversion?
/* Answer: JavaScript automatically converts data types when values of different types are used together, a process called implicit type conversion or type coercion. This often happens in operations like addition or comparisons.
For Example:-
1| let sum = '5' - 2; // result is 3;
2| let result = 5 + '10'; // result is "510";
*/

// Question-2: What does typeof return for different data types?
/* Answer: The typeof operator returns a string indicating the type of a given operand. Here are some common results:
Primitive Types:
typeof 42 ➔ "number"
typeof 'Hello' ➔ "string"
typeof true ➔ "boolean"
typeof undefined ➔ "undefined"
typeof Symbol() ➔ "symbol"
typeof BigInt(12345) ➔ "bigint"

Special Cases:
typeof null ➔ "object"
typeof function() {} ➔ "function"
typeof {} ➔ "object"
typeof [] ➔ "object"
*/

// Question-3: What is NaN, and how can you check if a value is NaN?
/* Answer: NaN stands for "Not-a-Number" and represents an invalid or undefined numerical result, like dividing 0 / 0 or parsing an invalid number with parseInt("abc").

Checking for NaN:
isNaN(value): Checks if a value is NaN or becomes NaN when converted to a number.
Number.isNaN(value): Checks if a value is strictly NaN without type conversion.
Example: 
1| isNaN('abc');  // true (after type conversion)
2| Number.isNaN('abc');  // false (strict check)
3| Number.isNaN(NaN);  // true
*/

// step 4 completed

// step 5 starts

// Question-1: How does JavaScript handle implicit type conversion?
/* Answer: JavaScript automatically converts data types when values of different types are used together, a process called implicit type conversion or type coercion. This often happens in operations like addition or comparisons.
For Example:-
1| let sum = '5' - 2; // result is 3;
2| let result = 5 + '10'; // result is "510";
*/

// Question-2: What does typeof return for different data types?
/* Answer: The typeof operator returns a string indicating the type of a given operand. Here are some common results:
Primitive Types:
typeof 42 ➔ "number"
typeof 'Hello' ➔ "string"
typeof true ➔ "boolean"
typeof undefined ➔ "undefined"
typeof Symbol() ➔ "symbol"
typeof BigInt(12345) ➔ "bigint"

Special Cases:
typeof null ➔ "object"
typeof function() {} ➔ "function"
typeof {} ➔ "object"
typeof [] ➔ "object"
*/

// Question-3: What is NaN, and how can you check if a value is NaN?
/* Answer: NaN stands for "Not-a-Number" and represents an invalid or undefined numerical result, like dividing 0 / 0 or parsing an invalid number with parseInt("abc").

Checking for NaN:
isNaN(value): Checks if a value is NaN or becomes NaN when converted to a number.
Number.isNaN(value): Checks if a value is strictly NaN without type conversion.
Example: 
1| isNaN('abc');  // true (after type conversion)
2| Number.isNaN('abc');  // false (strict check)
3| Number.isNaN(NaN);  // true
*/

// step 5 ends

// step 6 starts

// Question-1: What is event delegation, and how does it work?

/* Answer: Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of multiple listeners to individual child elements. This leverages the event propagation (bubbling) mechanism, where events "bubble" up from the target element to its ancestors.
Example:
document.querySelector('#parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button')) {
    console.log('Button clicked:', event.target);
  }
});
*/

// Question-2: What are default parameters in JavaScript?

/* Answer: Default parameters allow you to set initial values for function parameters if no arguments are provided or if the argument is undefined. This helps avoid undefined values in functions.
Example:
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

greet(); // "Hello, Guest!"
greet('Alice'); // "Hello, Alice!"
*/

// Question-3: What is the difference between synchronous and asynchronous programming?

/* Answer:
Synchronous programming: Code is executed line by line. Each operation waits for the previous one to complete before continuing. This can lead to delays if an operation (like data fetching) takes time.

Asynchronous programming: Code execution does not wait for tasks to complete. Long-running tasks can run in the background, allowing other code to execute in the meantime.
*/


// Question-4: How does the setTimeout function work, and what is its use?

/* Answer: The setTimeout function in JavaScript is used to execute a function after a specified delay (in milliseconds). It allows for delayed actions, making it useful for timed events or animations.

How it works:
setTimeout takes two arguments: a callback function to execute and a delay in milliseconds.
After the delay, the function is added to the event queue and executed when the call stack is clear.
Example:
setTimeout(() => {
  console.log('Hello after 2 seconds');
}, 2000);
*/

// Question-5: What is the purpose of JSON.stringify() and JSON.parse()?

/*Answer:
1| JSON.stringify(): Converts a JavaScript object or array into a JSON string. This is often used to store or send data in a format that can be easily transferred over the web (like sending data in HTTP requests).
Example: 
const obj = { name: 'Alice', age: 25 };
const jsonString = JSON.stringify(obj); // '{"name":"Alice","age":25}'

2| JSON.parse(): Converts a JSON string back into a JavaScript object. This is commonly used to parse data received from a web server or from storage.
Example: 
const parsedObj = JSON.parse(jsonString); // { name: 'Alice', age: 25 }
*/


// Question-6: How can you handle asynchronous code in JavaScript?

/* Answer: In JavaScript, asynchronous code can be managed using three main approaches:
1| Callbacks: Pass a function as an argument to another function, allowing it to execute after a task completes. 
Example:
setTimeout(() => {
  console.log('Callback executed');
}, 1000);

2| Promises: Use Promise objects to handle asynchronous operations with .then() for success and .catch() for errors.
example: 
fetch('url')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

3| Async/Await: Syntactic sugar over Promises, allowing asynchronous code to look synchronous. await pauses execution until a Promise is resolved or rejected.
example:
async function fetchData() {
  try {
    let response = await fetch('url');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
*/

// Question-7: Explain the concept of the Event Loop in JavaScript.

/* Answer: The Event Loop is a process that helps JavaScript handle tasks like events or data fetching without stopping other code from running. JavaScript is single-threaded, meaning it can only do one thing at a time, but the Event Loop allows it to manage multiple tasks smoothly.
example:
console.log('Start');

setTimeout(() => {
  console.log('Middle');
}, 0);

console.log('End');

output:
Start
End
Middle
*/

// step 6 ends