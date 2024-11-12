// step 1 starts
// Question-1: What are arrow functions in ES6, and how are they different from regular functions?
/*Answer: Arrow functions in ES6 offer a concise syntax with =>. They differ from regular functions by:
Inheriting this from the surrounding context.
Not being usable as constructors (no new).
Allowing implicit returns for single expressions, eliminating the need for return.
*/

// Question-2: What is destructuring assignment in ES6, and how does it work with arrays and objects?
/*Answer: Destructuring assignment in ES6 allows easy extraction of values from arrays or properties from objects into variables.

Arrays: Use brackets ([]) to assign elements to variables by position: const [a, b] = [1, 2];
Objects: Use curly braces ({}) to match properties by name: const {x, y} = {x: 10, y: 20};
*/
/*Project-1: Write a function that takes an object with properties and logs each property individually.
Here’s a simple function to log each property of an object individually:
function logObjectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
Explanation:- This function iterates over the object's properties using a for...in loop and logs each property name and its value. The hasOwnProperty check ensures only the object's own properties (not inherited ones) are logged.
*/

// Question-3: Explain let, const, and var keywords. When should you use each?
/*Answer:
let: Used for block-scoped variables that can be reassigned. Use let when you expect the variable’s value to change.

const: Used for block-scoped, constant values that cannot be reassigned after declaration. Use const for variables you don’t want to reassign.

var: Function-scoped, can be redeclared, and is hoisted. Avoid var in modern JavaScript as let and const are more predictable and safer.
*/

// Question-4: What is the spread operator, and how can it be used with arrays and objects?

/*Answer: The spread operator (...) allows expansion of iterable elements or properties.
Arrays: Use it to copy or combine arrays: const newArray = [...array1, ...array2];
Objects: Use it to clone or merge objects: const newObj = {...obj1, ...obj2};
*/
/*
Project-2: Merge two arrays using the spread operator.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
};
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6];

Explanation: This function uses the spread operator (...) to expand both arrays into a new array, effectively merging them.
*/

// Question-5: How do template literals work in ES6, and how do they make string interpolation easier?
/*Answer: Template literals, introduced in ES6, are strings wrapped in backticks (`) that support embedded expressions with ${}. They make string interpolation easier by allowing you to insert variables directly within the string without needing concatenation. For example:
const name = "John";
const message = `Hello, ${name}!`; // Output: "Hello, John!"
*/

// Question-6: What are default parameters in ES6, and how do they improve function flexibility?

/* Answer: Default parameters in ES6 allow functions to set default values for parameters if no argument is provided.

They improve flexibility by ensuring functions have a fallback value, reducing the need for conditional checks. For example:-

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
greet(); // Output: "Hello, Guest!"
*/

// Question-7: Explain what Map and Set are in ES6 and how they differ from objects and arrays.
/*Answer:
Map: A collection of key-value pairs. Unlike objects, keys can be any data type (e.g., objects, functions). Maps preserve insertion order and have methods like .set(), .get(), and .has().

Set: A collection of unique values. Unlike arrays, it doesn’t allow duplicates and has methods like .add() and .has(). Sets are useful for storing unique values and checking membership quickly.

Differences: Maps are better than objects for flexible key types, and Sets are better than arrays for storing unique values.
*/
/*Project-3: Create a simple dictionary using Map to store key-value pairs:-
function createDictionary() {
  const dictionary = new Map();

  dictionary.set("apple", "A fruit that is typically red, green, or yellow.");
  dictionary.set("javascript", "A programming language used for web development.");
  dictionary.set("dog", "A domesticated carnivorous mammal.");

  // Accessing values using keys
  console.log(dictionary.get("apple")); // Output: A fruit that is typically red, green, or yellow.
  console.log(dictionary.get("javascript")); // Output: A programming language used for web development.
  console.log(dictionary.get("dog")); // Output: A domesticated carnivorous mammal.
}

createDictionary();
*/

// Question-8: What is the purpose of the for...of loop, and how is it different from for...in?
/*Answer:
# for...of: Iterates over iterable objects (like arrays, strings, maps) and retrieves the values directly. It's used when you need to work with the values of an iterable.
Example:-
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value); // Output: 1, 2, 3
}

# for...in: Iterates over the keys (or property names) of an object or array, including inherited properties. It's used for objects or array indices.
Example:-
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key); // Output: a, b
}
*/

// Question-9: Explain the concept of Promise in JavaScript. How do you use .then() and .catch()?
/*Answer:
A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states: pending, resolved (fulfilled), or rejected.

.then(): Used to specify what to do when the Promise resolves successfully (fulfilled). It takes a callback function as an argument.
.catch(): Used to handle errors if the Promise is rejected.
*/
/*
Project-4: Create a promise that resolves after 2 seconds and logs a message:-

function delayedMessage() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("This message appears after 2 seconds.");
    }, 2000); // 2 seconds delay
  });

  promise.then((message) => {
    console.log(message); // Output: "This message appears after 2 seconds."
  });
}

delayedMessage();

Explanation: The delayedMessage function creates a promise that resolves after 2 seconds using setTimeout. Once resolved, it logs the message to the console.
*/

// Question-10: What is async/await, and how does it work with Promises?
/*Answer:
# async: Declares a function as asynchronous, meaning it will always return a Promise. Inside an async function, you can use await.

# await: Pauses the execution of the async function until the Promise is resolved or rejected, returning the resolved value or throwing an error if rejected.

How it works with Promises:-
async/await simplifies working with Promises by making asynchronous code look synchronous and more readable.

Example:-
async function fetchData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched!"), 2000);
    });
    console.log(result); // Output: "Data fetched!"
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

Explanation-: The await keyword waits for the promise to resolve, and the result is assigned to result. If the promise is rejected, the catch block handles the error.
*/

// step 1 completed

// step 2 starts 

// Question-1: What is the DOM, and how does JavaScript interact with it?
/* Answer:
The DOM (Document Object Model) is a programming interface for web documents. It represents the page's structure as a tree of objects, where each object corresponds to a part of the page (elements, attributes, text, etc.).

JavaScript interacts with the DOM by manipulating its elements. JavaScript can:-
1| Access elements using methods like document.getElementById() or document.querySelector().
2| Modify element content, attributes, or styles using properties like .innerHTML, .setAttribute(), or .style.
3| Create or delete elements dynamically with methods like document.createElement() or element.remove().

Example:-
const element = document.getElementById("myElement");
element.textContent = "Updated text!";
Explanation:- JavaScript accesses the DOM to modify the content of an HTML element, such as changing its text.
*/

// Question:-2 Explain how to select elements in the DOM using methods like getElementById, querySelector, and querySelectorAll.

/*Answer:
1| getElementById(): Selects an element by its unique ID. Returns the first matching element.
Example:-
const element = document.getElementById("myId");

2| querySelector(): Selects the first element that matches a CSS selector (ID, class, tag, etc.).
Example:-
const element = document.querySelector(".myClass");

3| querySelectorAll(): Selects all elements that match a CSS selector and returns a NodeList (similar to an array).
Example:-
const elements = document.querySelectorAll("p");
*/
/*
Project-1: Create a webpage with a button that changes the color of a div when clicked.
Here’s the HTML, CSS, and JavaScript to accomplish this:-
function changeColor() {
      const colorBox = document.getElementById("colorBox");
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      colorBox.style.backgroundColor = randomColor;
    }
*/

// Question-3: How do event listeners work in JavaScript? Explain addEventListener.
/*
Answer:
Event listeners in JavaScript allow you to respond to user interactions or other events, such as clicks, key presses, or page loads.

The addEventListener() method attaches an event listener to an element, which listens for specific events and executes a callback function when the event occurs.

Syntax:
element.addEventListener(event, callback, [useCapture]);
1| event: The type of event to listen for (e.g., 'click', 'keydown').
2| callback: The function to execute when the event is triggered.
3| useCapture (optional): A boolean indicating whether the event should be captured in the capturing phase. Default is false (bubbling phase).

Example:
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

Explanation:
When the button with ID myButton is clicked, the alert("Button clicked!") will execute.
addEventListener is preferred over inline event handlers because it allows multiple event listeners on the same element and avoids overwriting existing handlers.
*/

// Question-4: What is event delegation, and why is it useful?
/*
Answer:
Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of multiple listeners on individual child elements. The parent element listens for events on its children by exploiting event bubbling.

When an event occurs on a child element, it bubbles up to the parent, where it can be handled by the event listener.

Why it's useful:
Improves performance: Instead of adding listeners to many child elements, you only add one to the parent.
Handles dynamically added elements: It works with elements added to the DOM after the initial page load.

Example:
const parent = document.getElementById("parent");

parent.addEventListener("click", function(event) {
  if (event.target && event.target.matches("button")) {
    alert("Button clicked!");
  }
});

Explanation:
1| The event listener is attached to the parent element (#parent).
2| It checks if the clicked target is a button using event.target and matches().
3| This approach works even if buttons are added dynamically to the DOM later.
*/
/*
Project-2: Create a list where clicking on each list item logs its content. Use event delegation:-
const list = document.getElementById("itemList");

    list.addEventListener("click", function(event) {
      if (event.target && event.target.matches("li")) {
        console.log(event.target.textContent);
      }
    });
*/

// Question-5: What is the difference between innerHTML, textContent, and innerText?
/*
Answer:
1| innerHTML:-
Purpose: Gets or sets the HTML content inside an element, including HTML tags.
Use case: When you need to get or set both the text and any HTML structure within an element.
Example:-
const element = document.getElementById("myElement");
console.log(element.innerHTML); // Outputs HTML content (tags included)

2| textContent:
Purpose: Gets or sets the text content inside an element, without any HTML tags.
Use case: When you only need to manipulate or retrieve plain text.
Example:-
const element = document.getElementById("myElement");
console.log(element.textContent); // Outputs plain text

3| innerText:
Purpose: Similar to textContent, but also accounts for CSS styling (like visibility or display properties) and excludes hidden elements.
Use case: When you need the visible text content, considering the current CSS styles.
Example:-
const element = document.getElementById("myElement");
console.log(element.innerText); // Outputs visible text (ignores hidden text)
*/

// Question-6: Explain how you can manipulate CSS styles of an element using JavaScript.
/*
Answer:
CSS styles of an element can be manipulated in JavaScript using the style property, which allows direct modification of inline styles.

Steps:
Select the element: Use methods like document.getElementById() or document.querySelector() to access the element.
Modify the style: Access the style property and set individual CSS properties.

Example:-
Select the element:
const element = document.getElementById("myElement");

Change the background color:
element.style.backgroundColor = "blue";

Change the font size:
element.style.fontSize = "20px";

Set multiple styles:
element.style.cssText = "color: red; font-weight: bold;";

Add a class to apply external styles:
element.classList.add("new-class");

Explanation:-
1| The style property allows direct changes to CSS properties (e.g., backgroundColor, fontSize).
2| The cssText property enables the setting of multiple styles at once.
3| The classList.add() method adds a class, which applies predefined styles from external CSS.
*/

// Question-7: How do you traverse the DOM? Explain parentNode, firstChild, lastChild, etc.
/*
The DOM can be traversed using various properties and methods to navigate between elements in the document tree.

1| parentNode: Returns the parent node of the specified element.
Example:-
const element = document.getElementById("myElement");
const parent = element.parentNode;

2| firstChild: Returns the first child node of an element (which could be an element, text, or comment).
Example:-
const firstChild = element.firstChild;

3| lastChild: Returns the last child node of an element.
Example:-
const lastChild = element.lastChild;

4| nextSibling: Returns the next sibling node (node that comes immediately after the current node).
Example:-
const nextSibling = element.nextSibling;

5| previousSibling: Returns the previous sibling node (node that comes immediately before the current node).
Example:-
const previousSibling = element.previousSibling;

6| children: Returns a collection of child elements, excluding non-element nodes like text or comments.
Example:-
const children = element.children;

7| firstElementChild and lastElementChild: Similar to firstChild and lastChild, but only consider element nodes.
Example:-
const firstElement = element.firstElementChild;
const lastElement = element.lastElementChild;
*/

// Question-8: What is the purpose of preventDefault() and stopPropagation() in event handling?
/*
Answer:
1| preventDefault():
Purpose:- Prevents the default action associated with the event from occurring. This is commonly used with form submissions, links, or other events that trigger default browser behavior.
Example:- In a form, preventDefault() can be used to prevent the form from submitting when the submit button is clicked.
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  console.log("Form submission prevented!");
});

2| stopPropagation():
Purpose: Stops the event from propagating (bubbling or capturing) to other elements. This means the event will not trigger any listeners on parent or ancestor elements.
Example: If an event is triggered on a child element, stopPropagation() can be used to prevent the event from reaching the parent elements.
const button = document.getElementById("myButton");
button.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent event from bubbling up to parent
  console.log("Button clicked!");
});
*/
/*
Project-3: Create a form that prevents submission and logs a message instead.
Here’s the HTML, CSS, and JavaScript to accomplish this:-
const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      console.log("Form submission prevented!"); // Log a message instead
    });

Explanation:-
1| The form has a submit button, and when it's clicked, the submit event is triggered.
2| The event listener on the form calls event.preventDefault() to prevent the form from submitting.
3| Instead of submitting the form, it logs the message "Form submission prevented!" to the console.
*/

// step-2 completed

// step-3 starts
// Question-1: What is the Browser Object Model (BOM) in JavaScript?
/*
Answer:
The Browser Object Model (BOM) is a collection of objects that allow JavaScript to interact with the browser outside of the HTML document. BOM provides access to browser-related functionality, such as the window, navigation, and screen.
*/

// Question-2: How does window differ from document?
/*
Answer:
window:-
Represents the browser window or frame that displays the web page.
It is the global object in JavaScript, meaning all global variables and functions are properties of the window object.
Provides access to browser-related functionalities such as controlling the window (e.g., opening new windows, alerting messages) and interacting with the browser environment (e.g., window.location, window.history).
For Example:- 
window.alert("This is a window alert!");
window.location.href = "https://example.com"; // Redirects to a new URL

document:-
Refers to the HTML document loaded in the browser window.
It is an object that allows JavaScript to interact with and manipulate the content of the page, such as retrieving and modifying elements (e.g., document.getElementById(), document.createElement()).
It represents the structure of the web page (DOM), where elements, text, and attributes are defined.
for example:-
const heading = document.getElementById("myHeading");
heading.textContent = "New Heading Text"; // Modifies content in the document
*/

// Question-3: Explain how localStorage, sessionStorage, and cookies work and their differences.
/*
Answer:
1. localStorage:
Purpose: Stores data with no expiration time. Data persists even when the browser is closed and reopened.
Storage Limit: Typically around 5MB per origin.
Scope: Accessible only by the same origin (same domain, protocol, and port).
Example:-
localStorage.setItem("username", "JohnDoe");
console.log(localStorage.getItem("username")); // "JohnDoe"

2. sessionStorage:
Purpose: Stores data for the duration of the page session. Data is lost when the browser tab is closed.
Storage Limit: Typically around 5MB per origin, same as localStorage.
Scope: Accessible only within the same window or tab.
Example:-
sessionStorage.setItem("cart", "item1");
console.log(sessionStorage.getItem("cart")); // "item1"

3. Cookies:
Purpose: Store small pieces of data that are sent to the server with every HTTP request. Often used for session management and tracking.
Storage Limit: About 4KB per cookie.
Expiration: Can be set with an expiration date or made session-only (no expiration).
Scope: Accessible by both the client and the server.
Example:-
document.cookie = "user=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT";
console.log(document.cookie); // "user=JohnDoe"
*/
/*
Project-1: Store and retrieve user preferences (like theme) using localStorage.
This example demonstrates how to save a user's theme preference (e.g., "light" or "dark") using localStorage and apply it when the page loads.
Function to apply theme:
function applyTheme(theme) {
  document.body.className = theme + "-theme";
}

    Retrieve and apply saved theme on page load:
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    Toggle theme and save the preference:
    document.querySelector(".theme-toggle").addEventListener("click", () => {
      const currentTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
      applyTheme(currentTheme);
      localStorage.setItem("theme", currentTheme); // Save theme preference
    });
Explanation:
Apply saved theme: When the page loads, the code retrieves the theme preference from localStorage and applies it to the body.
Toggle and save theme: When the "Toggle Theme" button is clicked, the theme is switched between "light" and "dark," and this preference is saved in localStorage.
Persistent preference: Reloading the page maintains the last chosen theme due to the saved preference in localStorage.
    */
    
// Question-4: What is the purpose of the navigator object, and what properties does it have?
/*
answer:The navigator object provides information about the browser and the user's environment, allowing JavaScript to access details about the browser type, version, platform, and more. It is part of the Browser Object Model (BOM) and can be used for tasks like detecting the user's browser, checking online status, or accessing geolocation.

Key Properties of the navigator Object:-
1| navigator.userAgent: Returns a string representing the user-agent header (information about the browser, OS, and device).
example:-
console.log(navigator.userAgent); // "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."

2| navigator.language: Indicates the language set in the browser (e.g., "en-US").
example:-
console.log(navigator.language); // "en-US"

3| navigator.platform: Returns the platform on which the browser is running (e.g., "Win32", "MacIntel").
example:-
console.log(navigator.platform); // "Win32"

4| navigator.onLine: Returns true if the browser is online, or false if offline.
example:-
console.log(navigator.onLine); // true or false

5| navigator.geolocation: Provides access to the device’s geolocation capabilities, allowing location data retrieval (requires user permission).
example:-
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});

6| navigator.cookieEnabled: Indicates whether cookies are enabled in the browser.
example:-
console.log(navigator.cookieEnabled); // true or false
*/

// Question-5: How do window.open and window.close methods work in JavaScript?
/*
Answer:
window.open
Purpose: Opens a new browser window or tab.
Syntax: window.open(url, name, specs, replace)
url: The URL to open in the new window. If omitted, a blank page opens.
name: The name of the new window. If the name matches an existing window, it will reuse that window/tab.
specs: A string specifying the window's features (e.g., width, height, resizable).
replace: A boolean indicating whether the new URL should replace the current entry in the history.
Example:-
const newWindow = window.open("https://example.com", "ExampleWindow", "width=500,height=500");

window.close:-
Purpose: Closes the current window or a window opened by window.open.
Syntax: window.close()
Usage: Only works for windows opened by window.open, and most browsers restrict closing other windows for security reasons.
Example:-
const newWindow = window.open("https://example.com", "ExampleWindow");
newWindow.close(); // Closes the newly opened window

*/

// Question-6: Explain how to get the viewport width and height of a browser window using JavaScript.
/*
Answer:
The viewport width and height can be obtained using the window.innerWidth and window.innerHeight properties, which provide the dimensions of the visible part of the browser window.

Methods to Get Viewport Dimensions:-
1| Using window.innerWidth and window.innerHeight:-
# window.innerWidth: Returns the width of the viewport in pixels.
# window.innerHeight: Returns the height of the viewport in pixels.
for example:-
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
console.log(`Viewport Width: ${viewportWidth}, Height: ${viewportHeight}`);

2| Using document.documentElement.clientWidth and document.documentElement.clientHeight:
# These properties give the width and height of the viewport, excluding any scrollbars.
# Useful as a fallback for older browsers.
for example:-
const viewportWidth = document.documentElement.clientWidth;
const viewportHeight = document.documentElement.clientHeight;
console.log(`Viewport Width: ${viewportWidth}, Height: ${viewportHeight}`);
*/
/*
Project-2: Create a function that logs the window’s size whenever it’s resized.
To achieve this, an event listener can be added for the resize event, which triggers whenever the window is resized. Inside this listener, the function will log the current viewport width and height.
// Function to log the window's current size
    function logWindowSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(`Width: ${width}, Height: ${height}`);
    }

    // Add event listener to trigger logWindowSize on window resize
    window.addEventListener("resize", logWindowSize);
*/

// Question-7: What is the purpose of the setTimeout and setInterval functions?
/*
Answer:
1. setTimeout:-
Purpose: Executes a function or a piece of code after a specified delay (in milliseconds).
Syntax: setTimeout(function, delay, arg1, arg2, ...)
function: The function to execute.
delay: The time (in milliseconds) to wait before executing the function.
arg1, arg2, ...: Optional arguments passed to the function.

Example:-
setTimeout(() => {
  console.log("This message is shown after 2 seconds.");
}, 2000); // Executes after 2 seconds
Purpose: Useful for delaying execution of code or for scheduling a one-time action.

2. setInterval:-
Purpose: Repeatedly executes a function or code at specified intervals (in milliseconds).
Syntax: setInterval(function, interval, arg1, arg2, ...)
function: The function to execute.
interval: The time (in milliseconds) between each execution of the function.
arg1, arg2, ...: Optional arguments passed to the function.

Example:-
setInterval(() => {
  console.log("This message is shown every 3 seconds.");
}, 3000); // Executes every 3 seconds
Purpose: Useful for performing repeated actions at regular intervals, such as updating a clock or making periodic network requests.
*/ 
/*
Project-3: Create a clock that updates every second using setInterval.
This project will create a simple digital clock that updates the time every second using setInterval.
here is the code snipper:-
// Function to update the clock
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const timeString = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial clock update
    updateClock();
*/

// Question-8: How can you detect if a user is online or offline using the BOM?
/*
Answer:
The navigator.onLine property is used to detect whether a user is online or offline. It returns a boolean value: true if the user is online, and false if the user is offline.

Steps to Detect Online/Offline Status:-
1| Check initial status using navigator.onLine.
2| Listen for events like online and offline to detect when the user's status changes.

Example Code:
// Check if the user is online or offline initially
console.log(navigator.onLine ? "User is online" : "User is offline");

// Event listener to detect when the user goes online
window.addEventListener("online", () => {
  console.log("User is back online");
});

// Event listener to detect when the user goes offline
window.addEventListener("offline", () => {
  console.log("User is offline");
});

Explanation:-
navigator.onLine: Returns true if the user is online and false if offline.
online Event: Triggers when the user’s connectivity status changes to online.
offline Event: Triggers when the user’s connectivity status changes to offline.
*/

// step 3 completed

// step-4 starts

// Question-1: What is the Fetch API, and how does it work with Promises?
/*
Answer:
The Fetch API is a modern JavaScript API for making asynchronous HTTP requests. It is built on Promises, which allows handling asynchronous operations in a cleaner and more readable way compared to older methods like XMLHttpRequest. When fetch() is called, it returns a Promise that resolves to a Response object, representing the response to the request.

To use the Fetch API:-
1| The fetch() function initiates the request and returns a Promise.
2| then() is used to handle the resolved Response object.
3| catch() is used to handle any errors that occur during the request.

The Response object has methods like .json() or .text() to parse the response data. The Fetch API simplifies error handling and allows chaining multiple .then() and .catch() blocks for different stages of the request.
Example:-
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

Explanation:- In this example, the request is made to the given URL, and the response is processed as JSON. If there’s any error during the request, it’s caught and logged.
*/
/*
Project-1: Fetch data from a public API (e.g., JSONPlaceholder) and display it on the page.
Steps:
Create a basic HTML structure. (structure added into the html file by ordering with the step name and project number)
Use the Fetch API to retrieve data from JSONPlaceholder.
Display the data dynamically on the page.
Code snippet:-
// Fetch data from JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();  // Parse response to JSON
  })
  .then(data => {
    const postsContainer = document.getElementById("posts-container");
    
    // Loop through the posts and display them on the page
    data.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(postElement); // Append post to container
    });
  })
  .catch(error => {
    console.error("Fetch error:", error);  // Handle errors
  });
*/

// Question-2: How does XMLHttpRequest differ from the Fetch API?
/*
XMLHttpRequest and the Fetch API are both used to make HTTP requests in JavaScript, but they differ in several key aspects:

1| Syntax and Readability:
# XMLHttpRequest: Has a more complex, callback-based syntax that can be harder to work with, especially for handling asynchronous operations.
# Fetch API: Uses Promises, which provides a cleaner, more modern way to handle asynchronous code, making it easier to read and work with.

2| Error Handling:
# XMLHttpRequest: Error handling is more complex and typically requires checking the status code and implementing custom logic for various types of errors.
# Fetch API: Simplifies error handling by using Promises, where you can use .catch() for any network or HTTP errors.

3| Support for Promises:
XMLHttpRequest: Does not support Promises natively, and requires callback functions to handle responses.
Fetch API: Built around Promises, which allow chaining of .then() and .catch() methods, making asynchronous flow easier to manage.

4| Response Handling:
# XMLHttpRequest: Requires manually parsing the response (e.g., responseText or responseXML).
# Fetch API: Automatically handles responses and provides methods to parse them (like .json(), .text(), etc.).

5| Streaming and Request Cancellation:
# XMLHttpRequest: Does not natively support streaming or easy request cancellation.
# Fetch API: Supports streaming and allows request cancellation with the AbortController API.
*/

// Question-3: Explain what JSON is and how it’s used in JavaScript.
/*
Answer:
JSON (JavaScript Object Notation) is a lightweight format for data exchange, based on JavaScript object syntax. It stores data as key-value pairs.
1| Stringify: Convert JavaScript objects to JSON strings using JSON.stringify().
for example:-
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);

2| Parse: Convert JSON strings to JavaScript objects using JSON.parse().
for example:-
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
*/

// Question-4: How do you parse JSON data in JavaScript, and how do you stringify JavaScript objects?
/*
Answer:
1| Parsing JSON: Use JSON.parse() to convert a JSON string into a JavaScript object.
for example:-
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);

2| Stringifying JavaScript Objects: Use JSON.stringify() to convert a JavaScript object into a JSON string.
for example:-
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
*/
/*
Project-2: Create a function that converts an object to JSON and back to an object.
Steps:-
1| Convert an object to JSON using JSON.stringify().
2| Convert JSON back to an object using JSON.parse().
Code snippet:-
function convertObjectToJSONAndBack(obj) {
  // Convert object to JSON string
  const jsonString = JSON.stringify(obj);
  console.log("JSON String:", jsonString);
  
  // Convert JSON string back to object
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedObject);
}

// Example usage
const person = { name: "John", age: 30, city: "New York" };
convertObjectToJSONAndBack(person);
*/

// Question-5: What is CORS, and why do we need it when making API requests?
/*
Answer:
CORS (Cross-Origin Resource Sharing) is a security mechanism that allows web browsers to make requests to domains different from the origin (the domain where the web page is loaded).

Why do we need CORS?
1| Preventing Security Risks: Without CORS, malicious websites could send unauthorized requests to another site’s API, potentially exposing sensitive data.
2| Cross-Origin Requests: When making requests (e.g., AJAX) from a webpage on one domain to an API on another, the browser checks if the server allows such cross-origin requests.
3| Enabling Safe Requests: CORS headers in API responses tell the browser whether to allow the request, ensuring data security and control over access.

Example:-
If a webpage at https://example.com sends a request to https://api.example2.com, the server at example2.com must include the proper CORS headers (e.g., Access-Control-Allow-Origin: *) to allow this request.
*/

// Question-6: Explain how the FormData API works and when you’d use it.
/*
Answer:
The FormData API allows easy construction of a set of key/value pairs representing form fields and their values, making it useful for sending form data in AJAX requests.

How it works:-
1| Create FormData: A FormData object can be created from an HTML <form> element.
for example:-
const form = document.querySelector('form');
const formData = new FormData(form);

2| Appending data: Additional data can be appended to the FormData object.
for example:-
formData.append('username', 'JohnDoe');

3| Sending data: The FormData object is sent via fetch() or XMLHttpRequest in a POST request.
for example:-
fetch('/submit', {
  method: 'POST',
  body: formData
});

When to use:-
1| Form submissions: For sending form data asynchronously.
2| File uploads: Automatically handles file inputs.
3| Complex data: Sends complex form data, including files, in a single request.
*/

// Question-7: What is the purpose of the History API, and how do pushState and replaceState work?
/*
Answer:
The History API allows manipulation of the browser's history, enabling developers to manage the state of a web page and modify the browser’s URL without reloading the page.

Purpose:-
It helps create single-page applications (SPAs) by updating the URL and managing history states without triggering full page reloads.

1| pushState():- Adds a new entry to the browser’s history stack, updating the URL.
for example:-
history.pushState({ page: 1 }, "Page 1", "/page1");
This method is used when navigating to a new state or URL.

2| replaceState():- Modifies the current history entry, updating the URL without adding a new entry to the history stack.
for example:-
history.replaceState({ page: 2 }, "Page 2", "/page2");
This method is used when the current state needs to be replaced without affecting the history.
*/
/*
Project-3: Create a simple single-page navigation system with pushState.
Steps:-
1| Create basic HTML structure with multiple sections. (added structure in html file by follow the question ordering and project number)
2| Use the History API (pushState) to navigate between sections and update the URL.
3| Update the displayed content based on the URL using JavaScript.

Code snippet:-
function navigate(page) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.remove('active'));

  // Show the selected section
  const activeSection = document.getElementById(page);
  activeSection.classList.add('active');

  // Update the URL without reloading the page
  history.pushState({ page }, page, `/${page}`);
}

// Listen to the popstate event to handle back/forward browser buttons
window.addEventListener('popstate', (event) => {
  if (event.state) {
    // Show the correct section based on the URL
    const activeSection = document.getElementById(event.state.page);
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    activeSection.classList.add('active');
  }
});

// Initialize the page based on the current URL
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.slice(1); // Get the path after '/'
  if (path) {
    navigate(path); // Navigate to the page in the URL
  }
});
*/

// Questoin-8: How can you handle errors in API requests with try/catch blocks and the .catch() method?
/*
Answer:
Errors in API requests can be handled by either using try/catch with async/await or the .catch() method with Promises.

1| Using try/catch with async/await:
# When using async/await, try/catch blocks can wrap the request to catch any errors.
# This approach provides a cleaner syntax for handling synchronous and asynchronous errors.
for example:-
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

2| Using .catch() with Promises:
# If .then() is used to handle the response, .catch() can be added at the end of the chain to catch any errors.
# .catch() handles any errors that occur in the request or processing steps.
for example:-
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
*/

// Question-9: What are WebSockets, and how do they differ from HTTP requests?
/*
Answer:
WebSockets provide a protocol for persistent, bidirectional communication between a client and server, enabling real-time data exchange over a single, long-lasting connection.

Differences from HTTP Requests:-

1| Bidirectional Communication:
WebSockets allow data to flow freely between client and server at any time, ideal for real-time applications.
HTTP is a request-response protocol where the client requests, and the server responds, requiring a new connection for each interaction.

2| Persistent Connection:
WebSocket connections remain open, enabling constant data exchange without re-establishing a connection.
HTTP requires a new connection for each request, adding overhead.

3| Use Cases:
WebSockets are used in applications needing continuous data exchange, such as live chat, gaming, or stock updates.
HTTP is used for traditional web pages, form submissions, and data fetching where real-time interaction isn't required.
*/

// Question-10: Explain the basics of the Service Worker API and its use in creating progressive web apps (PWAs).
/*
Answer:
The Service Worker API is a browser feature that allows scripts to run in the background, separate from web pages, enabling capabilities like offline functionality, background syncing, and caching resources. This is essential in building Progressive Web Apps (PWAs).

Basics of Service Worker:-
1| Lifecycle: Service workers have a lifecycle that includes install, activate, and fetch events, enabling control over caching and response strategies.
2| Caching: Service workers can intercept network requests and serve cached resources, enabling content to load even without an internet connection.
3| Background Sync: Allows tasks (like form submissions) to be completed once connectivity is restored.

Use in PWAs:-
1| Offline Functionality: Service workers cache files and data, enabling apps to load and function offline, a key feature of PWAs.
2| Performance: Cached assets load faster, improving performance.
3| Push Notifications: Service workers allow push notifications, enhancing engagement.
*/

// step 4 completed