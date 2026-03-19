/* ☑️ EJS (Embedded JavaScript Templates)
- EJS is a templating engine that allows us to generate HTML
dynamically using JavaScript.
- It is useful when we want to create similar web pages for
different users while inserting dynamic data.
- Instead of writing large HTML code inside JS files,
we create separate .ejs template files.
- These templates are then rendered by Express using res.render().
- EJS is installed as an npm package, and Express can use it
directly after setting it as the view engine.
*/

/* ☑️ Views Directory Configuration
app.set("views", path.join(__dirname, "/views"))

- Express normally looks for template files inside a folder
named "views".
- This line explicitly tells Express where the views folder
is located.
- __dirname represents the current directory of the running file.
- path.join() safely constructs the correct folder path so
Express can find the .ejs templates even if the server file is in a different location.
*/

/* ☑️ views and public Folder Convention (Express)
- In Express projects, it is a common convention to organize files
into specific folders.

views
- Used to store all template files such as .ejs.
- These files are rendered by Express using res.render() to
generate dynamic HTML pages.

public
- Used to store static files such as CSS, images, and client-side JS.
- These files are served directly to the browser.

Note:
- This structure is not mandatory; it is just a widely followed
convention to keep projects organized and maintainable.
*/

const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

/* app.get("/", (req, res) => {
    res.render("home.ejs");
}); */

app.get("/rolldice", (req, res) => {
    res.render("home");
})  


/* ☑️ Workflow of this Express + EJS Route
1. Server Start
- app.listen(port) starts the Express server and makes it listen
for requests on the specified port.

2. Client Request
- When a user visits a URL like: /ig/ujjawal
- Express checks the defined routes and matches it with:
/ig/:username

3. Path Parameter Extraction
- ":username" is a path parameter.
- Express extracts this value from the URL and stores it
inside the req.params object.

Example:
req.params = { username: "ujjawal" }
- We then destructure it:
let { username } = req.params;

4. Rendering Template
- res.render("home.ejs", {username}) tells Express to render
the EJS template.
- The second argument is an object containing data that will
be passed to the template.

5. Dynamic Page Generation
- The home.ejs file receives the username variable and can
insert it dynamically into the HTML.
- Express converts the EJS template into final HTML and
sends it back to the browser as the response.
*/
/* app.get("/ig/:age", (req, res) => {
    let {age} = req.params;
    res.render("home.ejs", {age}); 
});  */
 
/* ☑️ EJS Include Syntax
- EJS provides the include feature to reuse template parts
from other files.

Syntax:
<%- include("includes/header.ejs") %>

- include() inserts the content of another EJS file
into the current template.
- <%- %> is used instead of <% %> because it renders
the included HTML without escaping it.
- This is commonly used to include reusable components
like headers, footers, and navigation bars.
*/

/* ☑️ Instagram Page with EJS */
/* app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const igData = require("./data.json");
    const data  = igData[username];
    res.render("ig.ejs", {data});
}); */

/* 🔥 Understanding the Flow
1. let {uname} = req.params
- req.params is an object containing path parameters from the URL.
- Using object destructuring, we extract the value of key "uname"
and store it in the variable uname.

2. let obj = require("./data.json")
- require() loads the entire JSON file and converts it into
a JavaScript object.

3. let obj1 = obj[uname]
- Here uname contains a value (e.g., "rahul").
- obj[uname] accesses the property of obj whose key matches
the value stored in uname.
- This allows us to dynamically retrieve data from the JSON object.
*/






