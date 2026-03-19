// ☑️ PART 11   
/* 
- Call Stack: The call stack is a data structure that keeps track of function calls. 
It records the functions as they are invoked and removes them from the stack once their execution is complete.


🔥 
- JavaScript is a single-threaded language, which means it executes one task at a time in its main execution thread. 
This design choice simplifies development and avoids common concurrency issues such as race conditions.
- However, modern applications often need to perform tasks like API calls, timers, or file operations that may take time to complete. 
If JavaScript were purely synchronous, these tasks would block the execution of the entire program.
- To handle this, JavaScript supports asynchronous programming. 
Operations such as API calls and timers are delegated to the browser (or runtime like Node.js), 
which is implemented in languages like C++ and can manage these tasks outside the JavaScript thread. 
Once these tasks complete, their callbacks are placed in the event loop queue to be executed when the call stack is free.
- Initially, JavaScript used callback functions to handle asynchronous behavior. 
While effective, excessive nesting of callbacks often led to a problem known as callback hell, making code difficult to read and maintain.
- To address this, Promises were introduced, providing a cleaner and more manageable way to handle asynchronous operations. 
Later, async/await was added as syntactic sugar over promises, allowing asynchronous code to be written in a more synchronous and readable style.
- Despite these features, JavaScript itself remains single-threaded, relying on the event loop and runtime environment to achieve non-blocking behavior rather than true multi-threading.

*/

// 🚨 Callback Hell
/* Basic code for changing the color of the text.

h1 = document.querySelector("h1");
setTimeout(() => {
    h1.style.color = "red";
}, 1000);
setTimeout(() => {
    h1.style.color = "green";
}, 2000);
setTimeout(() => {
    h1.style.color = "blue";
}) */

// Better Code: But this will lead to callback hell.
/* h1 = document.querySelector("h1");
function changeColor(color, delay, nextChangeColor){
    setTimeout(() => {
        h1.style.color = color;
        nextChangeColor();
    }, delay);
};

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("blue", 1000, () => {
            h1.innerHTML = "Hello";
        });
    });
}) */


// 🚨 Promises: 
/* 
- The Promise Object represents the eventual completion/failure of an asynchronous operation and its resulting value.
- then(): This is a function which is called on fullfilled state.
- catch(): This is a function which is called on rejected state.

🔥 Promises represent the future result of an asynchronous operation. A Promise starts in a pending state and is later fulfilled (via resolve) or rejected (via reject).
.then() runs when a Promise is fulfilled, .catch() runs when it is rejected, and the event loop ensures these callbacks are executed once the call stack is free, preventing blocking and avoiding callback hell.

- A Promise has states (pending, fulfilled, rejected). The resolve and reject functions are used to change the Promise’s state, and .then() and .catch() execute based on the Promise’s final state.

*/

/* Without Promises
function saveToDB(data, func1, func2){
    let val = Math.ceil(Math.random() * 10);
    if(val < 5){
        func1();
    }
    else{
        func2();
    }
}

saveToDB("d", () => {
    alert("Data Stored");
    saveToDB("a", () => {
        alert("Data is stored 2.");
    }, () => {
        alert("Storage is full");
    });
}, () => {
    alert("Data not stored!");
}); */


// With Promises
/* function saveToDB(data){
    return new Promise((resolve, reject) => {
        let speed = Math.ceil(Math.random() * 10);
        if(speed < 5){
            resolve("Data is saved!");
        }
        else{
            reject("Data not stored!!");
        }
    });
}   */
 
// With then & catch
/* let request = saveToDB("x");
request
.then(() => {
    console.log("Promise Resolved!");
    return saveToDB("y");
})
.then(() => {
    console.log("Promise 2 Resolved!");
})
.catch(() => {
    console.log("Promise Rejected!");
})  */



// ☑️ PART 12
/* 
- The async keyword is used to define an asynchronous function. An async function always returns a Promise. 
The Promise is fulfilled with the returned value if the function completes successfully, or rejected if the function throws an error.
- The await keyword is used inside an async function to pause the execution of that function until the awaited Promise is settled (fulfilled or rejected). 
While the function waits, JavaScript does not block the main thread; other code continues to run.

*/

/* async function greet(){
    return "hello";
}

greet()
.then((result) => {
    console.log("Hurray");
    console.log("Function returned: " + result);
})
.catch((err) => {
    console.log("Meh");
}); */


// await keyword
/* function num(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = Math.ceil(Math.random() * 10);
            console.log(n);
            resolve();
        }, 1000);
    })
}

async function demo(){
    try {
        await num();
        await num();
        await num();
    }
    catch(err) {
        console.log(err);
    }
    console.log("Hello"); 
}

demo(); */

// 🔥 setTimeout makes code asynchronous, but it does NOT make your function wait.
// async/await is used to control when asynchronous results are used.

// 🔥 JavaScript handles asynchronous operations using callbacks, Promises (with resolve/reject and .then()/.catch()), 
// and async/await, which is syntactic sugar over Promises for cleaner control flow.


// 🚨 API {Application Progrmming Interface}
/* 
- API: I t is a specific URL where an API can be accessed to perform a particular operation.

- API Testing: Hoppscotch and Postman are popular API testing tools used to test, debug, and interact with APIs without writing application code.

- AJAX: AJAX (Asynchronous JavaScript and XML) is a technique that allows a web page to communicate with a server asynchronously, without reloading the entire page.

- Status Code: These are the codes that tell you whether a request succeeded, failed, or needs further action.

- JSON: JavaScript Object Notation
-- It is a format for storing raw data.
-- It is comprises of only data, no functions/methods.
|-> let json = `{"key1": "value1", "key2": value2}`; This is a JSON string.
|-> let obj = JSON.parse(json); This way we convert a JSON string into JS object.
|-> JSON.stringify(jsObject); It is a method for converting JS objects into JSON strings.

*/ 

// 🚨 API Request using Fetch
let url = "https://catfact.ninja/fact";

// fetch function always returns a Promise. 
/* fetch(url)
.then((response) => {
    // console.log(response); // This will not print the expected o/p.
    // This will return a object too, and this only contains our expected data.
    response.json()
    .then((data) => {
        console.log(data);
    })

})
.catch((err) => {
    console.log(err);
}) */

// 🚨 Parameters receive values passed by the Promise when the async operation completes

// 🔥 Fetch API using async-await



// ☑️ PART 13
/* 
- Axios: Library to make HTTP request.
-Axios does NOT give direct access to data.
It still returns a Promise.
It just removes extra steps that fetch() forces you to write.


*/

// Fetching APIs using Axios
/* async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact; // Direct access to the expected o/p.
    }
    catch(e) {
        console.log("Error - ", e);
        return "No fact found!";
    }
}

// getFacts();

// Fetching data from API and displaying it on our webpage
let btn = document.querySelector("button");
let p = document.querySelector("#demo");

btn.addEventListener("click", async () => {
    let facts = await getFacts();
    p.innerHTML = facts;
}); */


// 🔥 How to use async-await keywords along with axios for fetching the APIs. 
// Now use the fetched data and display different information on webpage in response of certain events.
// Why is it important for calling a async call back into addEventListener when dealing with API fetching.

