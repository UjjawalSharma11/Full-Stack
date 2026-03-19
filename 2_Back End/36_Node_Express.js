/* ☑️ Library vs Framework
Library:
- A library is a collection of pre-written code used to perform
specific tasks when needed.
- The developer controls when and where to use it.
- Example: Axios

Framework:
- A framework provides a predefined structure for building
applications.
- It controls the flow of the program and calls our code when needed.
- Example: Express
*/


/* ☑️ Express
- Express is a web application framework for Node.js used for
building server-side applications and APIs.
- It is installed as an npm package.

Express is mainly used to:
- Listen for incoming client requests.
- Process and parse request data.
- Match requests with appropriate routes.
- Send responses back to the client.

----------------------------------------------------

🚨 Working in this code:
- require("express") imports the Express framework.
- Calling express() returns an application object which is
stored in the variable "app".
- This app object contains many methods such as:
    app.listen()
    app.use()
    routing methods like app.get(), app.post(), etc.

Port:
- A port acts as a communication endpoint between the
client and the server.
- In this example:
    Client → Browser (Chrome)
    Server → Node.js application running in the terminal

🚨 app.listen(port)
- Starts the server and makes it listen for incoming
requests on the specified port.

🚨 app.use()
- It is a middleware function that runs whenever a
request reaches the server.
- In this code it simply logs a message in the terminal
whenever a new request is received.
*/

/* ☑️ Handling Request and Sending Response in Express
- When a client (browser) makes a request to the server, the request
is received by Express and processed through middleware functions.
- app.use() is a middleware that runs for every incoming request.
- Express automatically creates two objects for every request:
    req → contains information about the incoming request
    res → used to send a response back to the client

----------------------------------------------------

res.send()
- res.send() is used to send the response from the server to the client.
- It can send different types of data such as:
    HTML
    Text
    Objects
    Arrays

- If an HTML string is sent, the browser renders it as a webpage.
- If a JavaScript object or array is sent, Express automatically
converts it into JSON before sending it to the client.
*/

/* const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use((req, res) => {
    console.log("New incoming request!");
    let temp = "<h1>Hello</h1><ul><li>one</li><li>two</li></ul>";
    res.send(temp);
}) */


/* ☑️ Routing in Express
- Routing refers to determining how the server responds to a client
request based on the URL (path) and HTTP method.
- When a request reaches the server, Express checks the route
definition and decides which function should handle that request.
Example idea:
GET /home
GET /about
POST /login
Each of these routes can have different responses.

☑️ app.use()
- app.use() is used to define middleware.
- It runs for every request that reaches the server unless restricted
by a specific path.
- It does not check the HTTP method (GET, POST, etc).
- Mostly used for logging, authentication, parsing data, etc.
Key Idea:
Runs for all request types.

☑️ app.get()
- app.get() handles requests where the HTTP method is GET.
- GET requests are generally used to fetch data from the server.
Example usage:
Loading a webpage
Fetching user data
Getting a list of products

☑️ app.post()
- app.post() handles requests where the HTTP method is POST.
- POST requests are used to send data from the client to the server.
Example usage:
Submitting forms
User login/signup
Sending data to database

☑️ Key Difference
app.use()  → middleware, runs for all request types
app.get()  → handles GET requests (fetching data)
app.post() → handles POST requests (sending data to server)
*/

/* 🔥 Express Routing Workflow
Step 1: Server Starts
- When we run the file using node, Express creates a server.
- app.listen(port) starts the server and makes it listen for
incoming requests on that port.

Example:
User opens → http://localhost:3000
Browser sends a request to port 3000.
*/

/* ☑️ Step 2: Request Reaches Express
- The browser sends an HTTP request containing:
    Method → GET / POST
    Path   → /home /login /about etc.

Example request:
GET /home
POST /login

Express now tries to find a matching route.
*/

/* ☑️ Step 3: Middleware Runs (app.use)
- Before reaching the route, middleware functions run.

Example:

app.use((req,res,next)=>{
 console.log("New request received");
 next();
})

- Middleware can log requests, check authentication,
or modify request data.

Important:
next() passes control to the next middleware/route.
*/

/* ☑️ Step 4: Route Matching
- Express checks routes in order and finds the one
  matching both:
    HTTP method
    URL path

Example routes:

app.get("/home",(req,res)=>{
 res.send("Welcome to Home Page");
})

app.post("/login",(req,res)=>{
 res.send("Login successful");
})

- GET /home → triggers app.get("/home")
- POST /login → triggers app.post("/login")
*/

/* ☑️ Step 5: Server Sends Response
- The route handler processes the request and sends
a response using res methods.

Common methods:
res.send()
res.json()
res.sendFile()

Example response:
res.send("<h1>Hello User</h1>")
*/

/* 🔥 Path Parameters in Express
- Path parameters are dynamic values in the URL that allow one route
to handle multiple similar requests.
- They are defined in the route using ":" before the parameter name.

Example:
"/:username/:id"

Here:
username → dynamic value
id       → dynamic value

- When a request matches this route, Express stores the values
of these parameters inside the req.params object.
- req.params is an object containing all path parameters
extracted from the URL.
*/
const express = require("express");
const app = express();

let port = 2000;
app.listen(port, () => {
    console.log("Server is running for port 2000!");
})

/* app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let {username, id} = req.params;
    let html = `<h1>Hello ${username}, having id: ${id}.</h1>`
    res.send(html);
}) */

/* 🔥 Query Strings in Express
- Query strings are additional parameters sent in the URL
to pass data from the client to the server.
- They appear after the "?" in the URL and are written
as key=value pairs.

Example:
/search?q=apple

- Express automatically stores these values in the
req.query object.
- req.query is an object containing all query parameters
sent in the URL.
*/
app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`Hello, ${q}`);
})