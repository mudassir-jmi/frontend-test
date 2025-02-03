// 3. API Integration & Data Fetching 
// Question: 
// Write a function using fetch() to call an API 
// (https://jsonplaceholder.typicode.com/posts/1), retrieve the data, and log the 
// title to the console. 
// function fetchPostTitle() { 
// // Your code here 
// } 
// fetchPostTitle();

async function fetchPostTitle() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

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
