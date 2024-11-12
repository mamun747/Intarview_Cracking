// step 1 starts

// Question-1: What is React, and why is it used?
// Answer: React is a JavaScript library for building user interfaces, primarily for single-page applications. It enables the creation of reusable UI components and efficiently updates the DOM using a virtual DOM, improving performance. React is used to build dynamic, interactive, and scalable web applications.

// Question-2: What is JSX, and why is it preferred in React?
// Answer: JSX (JavaScript XML) is a syntax extension that allows HTML-like code in JavaScript. It simplifies writing UI components by merging HTML and JavaScript. JSX is preferred in React because it improves readability, enables the use of JavaScript expressions directly within the markup, and is easier to manage and debug.

// Question-3: How does JSX differ from HTML?
/* Answer: JSX differs from HTML in several ways:
1| JSX uses camelCase for attributes (e.g., className instead of class).
2| JSX requires self-closing tags for elements like <img /> and <input />.
3| JavaScript expressions in JSX must be enclosed in curly braces {}.
4| JSX allows embedding logic and dynamic content within the markup. */

// Question-4: What are components in React?
// Answer: Components are reusable, self-contained building blocks in React that define how a UI should appear and behave. They can be functional or class-based and manage their own state and props to render dynamic content. Components allow for modular development and easier maintenance of UI.

// Question-5: What is the difference between functional and class components?
/* Answer:
1: Functional components are simpler, defined as functions, and generally do not manage state (until hooks were introduced).
2: Class components are more complex, defined using ES6 classes, and have lifecycle methods and the ability to manage state. */

// Question-6: What is a single-page application (SPA), and how does React enable it?
// Answer: A single-page application (SPA) is a web application that loads a single HTML page and dynamically updates content without reloading the entire page. React enables SPAs by using its virtual DOM to efficiently update only the necessary parts of the UI when the state changes, providing a seamless user experience with fast, responsive interactions.

// Question-7: What are props in React?
// Answer: Props (short for properties) are read-only data passed from a parent component to a child component in React. They allow components to receive and use dynamic values, enabling the creation of reusable and customizable components.

// Question-8: How is state different from props?
/* Answer:
# State is mutable and managed within a component, allowing it to change over time in response to user input or events.
# Props are immutable and passed from parent to child components, used to convey data and behavior. */

// Question-9: How can you pass data from one component to another in React?
/* Answer: Data can be passed from a parent component to a child component using props. To share data between sibling components, a common parent component can manage the state and pass it down through props. */

// Question-10: What is the significance of the key prop in lists?
// Answer: The key prop helps React identify which items in a list have changed, been added, or removed. It improves performance by enabling efficient updates and re-renders in dynamic lists. Each item in a list should have a unique key to maintain proper element identity.

// Question-11: How do you handle events in React?
// Answer: Events in React are handled by defining event handlers as functions and passing them as props to elements. React uses camelCase for event names (e.g., onClick, onChange). Event handlers are written as functions or arrow functions, and can access the component's state via this or hooks.

// Question-12: What are controlled and uncontrolled components in React?
/* Answer:
Controlled components: These components have their form data controlled by React state. The value of the input element is set by the state, and changes to it are handled via event handlers (e.g., onChange). This makes them more predictable and easier to manage, as React has full control over the input values.

Uncontrolled components: These components store form data in the DOM rather than in React state. They are accessed using refs to read the values. Uncontrolled components are typically easier to set up but offer less flexibility and control over the form data, making them less suitable for complex or dynamic forms. */

// Question-13: What is a React fragment, and why would you use it?
// Answer: A React fragment is a lightweight wrapper that allows grouping multiple elements without adding extra nodes to the DOM. It is used to return multiple elements from a component without introducing an additional parent element, helping keep the DOM structure clean and improving performance. Fragments are written as <></> or <React.Fragment></React.Fragment>.

// Question-14: How do you conditionally render elements in React?
// Answer: Elements in React can be conditionally rendered using JavaScript expressions like if, ternary operators (condition ? true : false), or logical && operators. These expressions can be used directly inside JSX to display elements based on certain conditions.

// Question-15: What are React Hooks? Name a few commonly used hooks.
/*Answer: React Hooks are functions that allow functional components to manage state, side effects, and other features without using class components. They enable reusable logic and enhance component functionality. Commonly used hooks include:-
1| useState: Manages state in functional components.
2| useEffect: Handles side effects like data fetching and DOM manipulation.
3| useContext: Accesses context data in functional components.
4| useRef: Provides references to DOM elements or values. */

// step 1 ends

// step 2 starts 

// Question-1: Explain the useState Hook.
/* Answer: The useState hook allows functional components to manage state. It returns an array with two elements: the current state value and a function to update that state. For Example:-
const [state, setState] = useState(initialValue);
It initializes the state with initialValue, and setState updates the value when called.
*/

// Question-2: How does the useEffect Hook work?
/* Answer: The useEffect hook performs side effects in functional components, such as data fetching, subscriptions, or DOM manipulations. It runs after every render by default, but it can be controlled with a dependency array. If the array is empty, it runs only once after the initial render. Example:-
useEffect(() => {
  // side effect code
}, [dependencies]);
*/

// Question-3: How can you make an API call in React?
/*Answer: API calls in React are typically made using fetch or third-party libraries like axios. The call is usually made inside the useEffect hook to ensure it happens after the component mounts. Example using fetch:-
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error:', error));
}, []);
*/

// Question-4: What are Higher-Order Components (HOCs)? Give an example.
/*Answer: A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior. HOCs are used to reuse component logic. Especially it looks like a callback funcition.for Example:-
function withLoading(Component) {
  return function WithLoading(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}
Here, withLoading is a HOC that adds a loading state to any component it wraps.
*/

// Question-5: Explain the use of React Context API.
/*Answer: The React Context API allows passing data through the component tree without using props at every level. It is useful for managing global state, such as themes or user authentication, in a more efficient way. It also prevents the props drilling. It consists of three main parts:
1| React.createContext: Creates a Context object.
2| Provider: Wraps the component tree and provides the context value.
3| Consumer or useContext hook: Accesses the context value in child components.*/

// Question-6: How does the Context API differ from props drilling?
/*Answer:
1| Props drilling: involves passing data from a parent component to deeply nested child components through multiple layers of props. It can become cumbersome and hard to manage as the component tree grows.
2| Context API: provides a way to share data across components without passing props manually at every level. It simplifies managing global state and avoids the need to pass props through each intermediate component.*/

// Question-7: What are refs, and when should you use them in React?
/*Answer: Refs are references to DOM elements or component instances in React, allowing direct access to them. They are created using React.createRef() for class components or useRef() for functional components. Refs should be used when direct manipulation of the DOM is necessary (e.g., focusing an input, triggering animations, or integrating with third-party libraries).*/

// Question-8: What is the useRef Hook, and how is it different from createRef?
/*Answer:
1| useRef: useRef is a hook used in functional components to persist values across renders without triggering re-renders. It is commonly used to access DOM elements or store mutable values.
Example:-
const myRef = useRef(initialValue);

2| createRef: createRef is used in class components to create references to DOM elements or class instances. It is reinitialized on each render, whereas useRef persists across renders in functional components.
*/

// Question-9: What is the purpose of React.memo?
/* Answer: React.memo is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders by only re-rendering the component when its props change. This optimization improves performance, especially for components with complex UIs or expensive calculations. */

// Question-10: Explain React lifecycle methods.
/*Answer: React lifecycle methods are special methods in class components that manage component stages: mounting, updating, and unmounting. Key methods include:
1| componentDidMount: Called after the component is rendered for the first time, often used for data fetching.
2| componentDidUpdate: Triggered after state or props updates, allowing actions based on changes.
3| componentWillUnmount: Called before the component is removed, often used for cleanup.
In functional components, lifecycle effects are managed using the useEffect hook. */

// Question-11: What are componentDidMount and componentWillUnmount, and when are they used?
/*Answer:
1| componentDidMount: Runs after a component is initially rendered, commonly used for tasks like data fetching, setting up subscriptions, or initial DOM manipulation.
2| componentWillUnmount: Runs just before a component is removed from the DOM, ideal for cleanup tasks such as removing event listeners, canceling network requests, or clearing timers.*/


// Question-12: Explain the useCallback Hook and why it is useful.
/*Answer: The useCallback hook memoizes a function, returning the same instance of the function between renders if its dependencies haven’t changed. It is useful for optimizing performance by preventing unnecessary re-creations of functions, particularly when passing callbacks to child components that rely on reference equality to avoid re-renders. Example:-
const memoizedCallback = useCallback(() => {
  // function code
}, [dependencies]);
*/

// Question-13: How is the useMemo Hook used in React?
/*Answer: The useMemo hook memoizes a computed value, recomputing it only when its dependencies change. It is used to optimize performance by avoiding expensive calculations on every render. Example:-
const memoizedValue = useMemo(() => computeExpensiveValue(), [dependencies]);
useMemo is beneficial when calculations are complex or when components re-render frequently.
*/

// Question-14: What are controlled components in forms?
/*Answer: Controlled components in forms have their input values managed by React state. The component’s state controls the form element, with each change triggering an update through an onChange event. This approach makes it easier to validate, manipulate, and control input values in real-time.*/

// step 2 completed

// step 3 starts

// Question-1: What is React Router, and why is it used?
// Answer: React Router is a library for managing navigation and routing in React applications. It enables dynamic, client-side routing, allowing different components to be rendered based on the URL without refreshing the page. React Router is used to create single-page applications with multiple views, improving the user experience with fast, seamless transitions between pages.

// Question-2: Explain the difference between BrowserRouter, HashRouter, and MemoryRouter.
/*Answer:
BrowserRouter: Uses the HTML5 history API, enabling clean URLs without hash symbols. Ideal for standard web apps where the server handles routes.
HashRouter: Uses URL hash (#) for routing, making it compatible with static file servers since the hash is ignored by the server. Good for apps that don’t need server-side routing.
MemoryRouter: Stores history in memory without modifying the URL. Typically used for testing or non-browser environments.*/


// Question-3: How do you handle navigation in React?
// Answer: Navigation in React is handled using the React Router library. It provides components like <Link> for navigating to different routes and <Navigate> or useNavigate for programmatically navigating within the app. Routes are defined with the <Route> component within a <Router> (e.g., BrowserRouter).

// Question-4: What is the use of Switch and Route in React Router?
/*Answer:
1| Route: Defines a path and the component to render when the URL matches that path.
2| Switch: Wraps multiple <Route> components and ensures only the first matching route is rendered, preventing multiple routes from rendering simultaneously.

In React Router v6, Switch is replaced by Routes.*/


// Question-5: How can you use dynamic routes in React Router?
/*Answer: Dynamic routes in React Router are created by defining parameters in the route path with a : prefix, like /user/:id. The parameter value is accessed in the component using the useParams hook. Example:-
<Route path="/user/:id" element={<User />} />
In User, useParams will return { id: 'value' }, where 'value' is the actual path segment passed in the URL.
*/

// Question-6: What is the purpose of useParams Hook?
// Answer: The useParams hook is used to access dynamic parameters from the URL in React Router. It returns an object containing the key-value pairs of the route parameters. For example, in a route like /user/:id, useParams would return { id: 'value' }, allowing access to the id parameter inside the component.

// step 3 completed

// step 4 starts

// Question-1: What are React portals, and when should you use them?
// Answer: React portals provide a way to render children components outside of their parent component’s DOM hierarchy. This is useful for rendering UI elements like modals, tooltips, or overlays that need to appear outside the normal component structure. Portals are created using ReactDOM.createPortal(child, container).

// Question-2: What is code-splitting, and how do you implement it in React?
/*Answer:
Code-splitting is a technique that splits the application into smaller, more manageable chunks, loading only the necessary code for the current view, rather than loading the entire app upfront. This improves performance by reducing the initial load time.

In React, code-splitting is commonly implemented using React.lazy for dynamic imports and Suspense to handle the loading state. 
for example:-
const MyComponent = React.lazy(() => import('./MyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
This loads MyComponent only when it is needed, rather than on the initial load.
*/

// Question-3: Explain lazy loading and how you can implement it in React.
/*Answer:
Lazy loading is a technique where components or resources are only loaded when they are needed, rather than all at once during the initial page load. This improves performance by reducing the initial load time.

In React, lazy loading is implemented using React.lazy for dynamically importing components and Suspense to handle the loading state.
for example:-
const MyComponent = React.lazy(() => import('./MyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
*/


// Question-4: What is Concurrent Mode in React, and what are its benefits?
/*Answer:
Concurrent Mode in React is an experimental feature that enables React to work on multiple tasks simultaneously, without blocking the main thread. It allows React to pause rendering, work on high-priority updates first, and come back to less critical updates later. This results in smoother, more responsive UIs.

Benefits:-
1| Improved user experience with less janky or laggy interfaces.
2| Better performance for complex apps by prioritizing critical updates and deferring less important ones.
3| More efficient handling of tasks like animations, data fetching, and rendering.*/

// Question-5: How do you implement Error Boundaries in React?
/*Answer:
Error boundaries are React components that catch JavaScript errors in their child component tree, log them, and display a fallback UI instead of crashing the app. They are implemented using the componentDidCatch lifecycle method or static getDerivedStateFromError in class components.
for example:-

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

to check it:
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>

This ensures that errors within MyComponent are caught, and a fallback UI is displayed without breaking the whole app.
*/

// Question-6: What are the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?
/*Answer:
Client-Side Rendering (CSR):-
1| The browser downloads an empty HTML shell, and JavaScript fetches and renders content on the client side.
2| Initial load time can be slower, but once loaded, navigation is faster.
3| Better for dynamic, interactive applications with frequent user interactions.
4| SEO can be challenging without additional configuration (e.g., pre-rendering).

Server-Side Rendering (SSR):-
1| The server renders the HTML for each request, sending a fully rendered page to the browser.
2| Faster initial page load since the content is already rendered, improving SEO.
3| Can be slower for interactions after the page is loaded as the client needs to fetch new data.
4| Better for SEO and content-heavy sites, but may put more load on the server.*/

// Question-7: What is Server-Side Rendering (SSR) in React, and how does it work?
/*Answer:
Server-Side Rendering (SSR) in React is the process of rendering React components on the server instead of the client, and then sending the fully rendered HTML to the browser. This allows the page to be displayed more quickly and improves SEO because search engines can index the pre-rendered content.

How it works:-
1| The server receives the request for a React page.
2| React components are rendered on the server to generate HTML.
3| The server sends the fully rendered HTML to the client.
4| Once the JavaScript is loaded, React takes over, making the page interactive with client-side rendering.
Libraries like Next.js simplify SSR in React.*/

// Question-8: How does Next.js improve SSR and static generation in React applications?
/*Answer:
Next.js enhances SSR (Server-Side Rendering) and static generation in React by providing built-in features for both, making them easier to implement.

1| SSR: Next.js automatically handles server-side rendering for each page, fetching data and rendering React components on the server on every request. This ensures faster initial page loads and better SEO.

2| Static Generation: Next.js allows pre-rendering pages at build time (Static Generation) using getStaticProps and getStaticPaths. This generates static HTML files for pages, which can be served quickly, offering improved performance and SEO.*/

// Question-9: What are the benefits of using Next.js over a standard React app?
/*Answer:
Next.js offers several benefits over a standard React app:-

1| Server-Side Rendering (SSR): Next.js allows pages to be rendered on the server, improving initial load time and SEO.

2| Static Site Generation (SSG): Pages can be pre-rendered at build time for faster loading and better SEO, ideal for content-heavy sites.

3| Automatic Code Splitting: Next.js automatically splits the code, so only the necessary JavaScript for the current page is loaded, improving performance.

4| API Routes: Next.js provides built-in API routes, enabling the backend functionality within the same project.

5| File-based Routing: The routing system is file-based, meaning you can automatically create routes by simply adding files to the pages directory.

6| Image Optimization: Built-in image optimization ensures faster loading of images with automatic resizing and format selection.

7| Easy Deployment: Next.js integrates seamlessly with platforms like Vercel for optimized deployment and serverless functions.*/

// Question-10: What are Suspense and Concurrent Mode in React?
/*Answer:
1| Suspense: Suspense is a React feature that allows components to "wait" for something before rendering. It is commonly used with data fetching, lazy-loaded components, or other asynchronous operations. While the component is waiting, a fallback UI (e.g., a loading spinner) is displayed. It simplifies handling asynchronous rendering in React.
Example:-
<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>

2| Concurrent Mode: Concurrent Mode is an experimental feature that enables React to work on multiple tasks at once, without blocking the main thread. It improves UI responsiveness by prioritizing important updates (like user interactions) and delaying less critical updates. React can pause rendering and resume it later, ensuring smooth and fast user experiences.
*/

// Question-11: How do you handle asynchronous data with Suspense in React?
/*Answer:
To handle asynchronous data with Suspense in React, you typically combine it with a custom data-fetching mechanism that can throw promises. This allows React to pause the rendering of a component until the data is available, displaying a fallback UI in the meantime.

Create a Data Fetching Wrapper: Use a promise-based function that simulates fetching data and throws a promise while the data is loading.

Use Suspense: Wrap the component that needs the asynchronous data in a Suspense component, and provide a fallback UI to show while the data is being fetched.
for example:-
const fetchData = () => {
  let promise = fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error(error));

  throw promise;  // Suspend rendering until data is fetched
};

const MyComponent = () => {
  const data = fetchData();
  return <div>{data}</div>;
};

<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
In this example, Suspense will show the loading message while fetchData is fetching the data. Once the promise resolves, MyComponent will render with the fetched data.
*/

// Question-12: What are custom hooks in React, and why would you use them?
/*Answer:
Custom hooks in React are JavaScript functions that allow you to reuse logic across multiple components. They enable the extraction of component logic that involves state, effects, and other React features into a reusable function. Custom hooks help to keep components clean and maintainable by separating concerns.

Why use them?

Code Reusability: Share logic across multiple components without repeating code.
Cleaner Components: Move complex logic out of components, keeping them focused on rendering.
Separation of Concerns: Encapsulate logic related to state, effects, or context in a custom hook.
Example:-
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

Using useFetch in a component:-

const MyComponent = () => {
  const { data, loading } = useFetch('/api/data');

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
};
*/

// Question-13: What are the best practices for structuring a large React project?
/*Answer:-
When structuring a large React project, the following best practices can help ensure maintainability, scalability, and clarity:-

1| Component-based structure:
Organize components by feature or domain rather than by type. Each feature should have its own folder containing related components, styles, tests, and hooks.

2| Atomic Design:
Consider using Atomic Design principles where components are broken down into atoms (smallest units), molecules (combinations of atoms), organisms (larger UI elements), and templates (page layouts).

3| Use React Hooks and Context:
Centralize state management where possible using hooks and the Context API.
For complex state management, use a state management library like Redux or Zustand.

4| Separation of Concerns:
Separate logic (business, data fetching) and UI (presentation components). UI components should be stateless, and logic should be handled by hooks or higher-level components.

5| Reusable and Shared Components:
Keep reusable UI components in a separate folder (components/ or shared/), like buttons, form elements, etc.

6| Folder Structure for Services:
For APIs, utilities, or services, keep them in a services/ folder for better organization of external API calls or helper functions.

7| File Naming Conventions:
Use clear and consistent naming conventions (e.g., use PascalCase for components, camelCase for functions and variables).
Example: Button.js, useFetch.js, authReducer.js.

8| Tests:
Keep test files next to the components they test, or in a dedicated tests/ folder. Use testing libraries like Jest and React Testing Library.
Example: Button.test.js, Dashboard.test.js.

9| Code Splitting:
Implement code-splitting with React’s lazy and Suspense to improve performance by loading parts of the app only when needed.

10| Use a Consistent Linting and Formatting Setup:
Ensure consistency by using tools like ESLint and Prettier to enforce coding standards across the team.

11| Environment-specific configurations:
Have separate configuration files for different environments (e.g., development, production).
*/

// Question-14: How does the Virtual DOM work in React?
/*Answer:
The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to optimize UI updates and improve performance.

Here’s how it works:-
1| Initial Rendering: When a React component is first rendered, a Virtual DOM tree is created that mirrors the structure of the actual DOM.

2| State or Props Changes: When there are changes in a component’s state or props, React updates the Virtual DOM first, not the real DOM immediately.

3| Reconciliation: React compares the updated Virtual DOM with the previous version using a process called diffing. It calculates the minimal set of changes needed.

4| Updating the Real DOM: After identifying the differences, React updates only the parts of the real DOM that have changed, minimizing reflows and repaints, which improves performance.*/

// Question-15: How does React’s reconciliation algorithm work?
/*Answer:
React's reconciliation algorithm is responsible for efficiently updating the DOM when the state or props of a component change. It uses a strategy called diffing to determine the minimal number of changes needed to update the actual DOM. Here's how it works:-

1| Virtual DOM Comparison: When a component’s state or props change, React creates a new Virtual DOM tree. The algorithm then compares this new tree with the previous version of the tree.

2| Element Comparison: React compares elements at the same level in the Virtual DOM. If the elements are of the same type, React assumes they are the same and tries to update only the changed parts of the element (like attributes or text).

3| Keys in Lists: When rendering lists of components, React uses keys to track elements uniquely. Keys help React determine which items have been added, removed, or changed, making list updates more efficient.

4| Reordering, Adding, and Removing Elements: If an element is completely different (e.g., a different type or component), React will tear down the old element and create a new one in its place. If an element's content has changed but its type remains the same, React will update only that part.

5| Efficient DOM Updates: After determining the minimal changes, React updates the actual DOM, ensuring that only necessary changes are made to the real DOM, thus improving performance.*/

// Question-16: Explain how React.StrictMode works and its purpose.
/*Answer:
React.StrictMode is a wrapper component that helps identify potential problems in a React application by enabling additional checks and warnings during development. It does not affect the production build or the behavior of the application but helps developers catch issues early.

How it works:

1| Detecting Unsafe Lifecycle Methods: It warns when using deprecated lifecycle methods like componentWillMount, componentWillReceiveProps, and componentWillUpdate.

2| Identifying Side Effects: It helps identify side effects in the render phase by intentionally double-invoking certain lifecycle methods, such as componentDidMount or useEffect, to ensure they are free of side effects.

3| Highlighting Potential Problems: It provides additional warnings for unsafe or problematic patterns like legacy context API usage, async rendering issues, and other best practice violations.

Purpose:-
1| Development Tool: Its primary purpose is to assist developers in writing safe and optimal React code by providing helpful warnings and guidance during development.
2| Prepare for Future Features: It helps prepare apps for features like Concurrent Mode by detecting code that may not behave well in future React versions.

for example:-
<React.StrictMode>
  <App />
</React.StrictMode>

This feature is only active in development mode and is designed to help improve the stability and performance of React applications.
*/

// Question-17: How do you prevent unnecessary re-renders in React?
/*Answer:-
1| React.memo: Memoizes functional components to prevent re-renders when props don’t change.
2| PureComponent: Class components that prevent re-renders with shallow prop and state comparison.
3| useCallback: Memoizes functions to avoid recreation on each render.
4| useMemo: Memoizes expensive calculations, recalculating only when dependencies change.
5 |Avoid Inline Functions/Objects: Prevent re-creation on each render by using stable references.
6| Proper Keys in Lists: Use unique, stable keys for list items to optimize rendering.
7| Throttling/Debouncing: Limit re-renders in response to frequent events (e.g., input changes).*/

// Question-18: Explain how to debounce or throttle a function in React.
/*Answer:
1| Debouncing: Delays the function call until after a specified time has passed since the last call. It’s useful for actions like search inputs where you only want to trigger the action after the user stops typing.

Example with useEffect and setTimeout:-
const [query, setQuery] = useState('');

useEffect(() => {
  const timeoutId = setTimeout(() => {
    fetchData(query);
  }, 500);

  return () => clearTimeout(timeoutId);
}, [query]);

const handleChange = (e) => setQuery(e.target.value);

2| Throttling: Limits the frequency of function calls, ensuring the function is called at most once in a specified period. It’s useful for scroll or resize events.

Example with useEffect and setInterval:-
const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const throttle = setInterval(handleScroll, 200); // Executes every 200ms

  return () => clearInterval(throttle);
}, []);
*/

// Question-19: What are prop types, and why are they used in React?
/*Answer:
Prop types are a way to validate the types of props passed to a component. They help ensure that the component receives the correct type of data, making code more predictable and easier to debug.

Why use them?
1| Validation: Ensures that the correct type, shape, and required status of props are passed.
2| Documentation: Acts as a self-documenting tool for the expected props in a component.
3| Development Tool: Provides warnings in development mode when the wrong type or missing props are used.
Example:-
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => (
  <div>{name} is {age} years old.</div>
);

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
*/

// Question-20: How do you manage side effects in a React app?
/*Answer:
Side effects in React are managed using the useEffect hook. It runs after the render and can handle actions like data fetching, setting up subscriptions, or directly manipulating the DOM.

1| Basic usage: Runs after every render.
2| Dependencies: You can specify dependencies, so it only runs when certain values change.
3| Cleanup: You can return a cleanup function from useEffect to clean up resources, like unsubscribing from a service.
for example:-
useEffect(() => {
  fetchData(); // Side effect like fetching data

  return () => cleanup(); // Cleanup side effect on unmount or dependency change
}, [dependency]); // Runs when dependency changes
*/

// Question-21: How does the useReducer Hook work, and when would you use it?
/*Answer:
The useReducer hook is used to manage complex state logic in React. It’s an alternative to useState for handling state transitions, especially when the state depends on multiple actions.

How it works:-
1| Takes a reducer function and an initial state.
2| The reducer function specifies how the state should change based on the action.
3| Returns the current state and a dispatch function to trigger state updates.

When to use it:-
1| When the state logic is complex, with multiple sub-values or actions.
2| When the next state depends on the previous one (e.g., managing a form with many fields).
3| To centralize state management for easier debugging, similar to Redux but at a component level.
Example:-
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

*/

// Question-22: Explain how to create and use custom hooks.
/*Answer:
Custom hooks are JavaScript functions that allow you to reuse logic across multiple components in React.

How to create and use them:-
Create a Custom Hook:-
1| Start with the use prefix (e.g., useCustomHook).
2| Can use built-in hooks (like useState, useEffect) inside them.

Return Values:-
1| Return the state, functions, or any value that needs to be shared.

Use the Custom Hook:-
Call the custom hook inside a functional component like any other hook.

Example:-
// Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// Using the Custom Hook
function Counter() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
*/

// the project is added in to the current folder