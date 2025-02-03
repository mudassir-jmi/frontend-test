# Technical Assessment Questions

## 1. JavaScript Logic & Data Manipulation

### Question:

You are given an array of numbers. Write a JavaScript function that returns a new array containing only the even numbers.

```javascript
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]
```

### What It Tests:

✅ Understanding of array methods (like `.filter()`)
✅ Knowledge of callback functions and conditional logic

---

## 2. React Component & State Management

### Question:

Create a simple React functional component that displays a counter. Add two buttons: "Increment" and "Decrement", which update the counter value when clicked.

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### What It Tests:

✅ Understanding of React hooks (`useState`)
✅ Ability to handle events in React
✅ Component rendering and state updates

---

## 3. API Integration & Data Fetching

### Question:

Write a function using `fetch()` to call an API (`https://jsonplaceholder.typicode.com/posts/1`), retrieve the data, and log the title to the console.

```javascript
async function fetchPostTitle() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Post Title: ${data.title}`);
  } catch (error) {
    console.error("Error fetching post title:", error);
  }
}

fetchPostTitle();
```

### What It Tests:

✅ Knowledge of `fetch API` & promises
✅ Understanding of asynchronous JavaScript (`async/await`)
✅ Ability to extract and manipulate JSON data
