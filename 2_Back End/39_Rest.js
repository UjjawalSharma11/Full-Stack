/* ☑️ REST (Representational State Transfer)
- REST is an architectural style used to design web services.
- APIs following these principles are called RESTful APIs.
- It is commonly used for performing CRUD operations
on resources (data).

HTTP Methods:
GET    → Retrieve data from server
POST   → Create/send new data to server
PUT    → Update existing data (complete update)
PATCH  → Update existing data (partial update)
DELETE → Remove data from server
*/


/* ☑️ API Testing using Postman
- In Postman, we manually send requests to specific routes
(GET, POST, etc.) instead of using a browser UI.
- Unlike a browser, Postman does not render HTML pages;
it only shows the raw response returned by the server.
- For POST requests, we manually provide the required data
in the Body section (similar to form input).
- This allows us to simulate client requests and test
backend routes directly.
*/


/* 🔥 Complete Workflow (REST + Express + EJS)
- Server starts and listens on a port using app.listen().
- Middleware (express.urlencoded) parses form data into req.body.
- EJS is set as view engine and views/public folders are configured.

1. View All Posts (READ)
- Client sends GET request to /posts
- Server renders index.ejs and passes "posts" array
- EJS dynamically displays all posts

2. Show Form (CREATE - Step 1)
- Client sends GET request to /posts/new
- Server renders new.ejs containing a form
- User fills form (username + content)

3. Submit Form (CREATE - Step 2)
- Form sends POST request to /posts
- Data is sent in request body
- express.urlencoded parses data:
  req.body = { username, content }

4. Update Data
- Server extracts data from req.body
- New post is added to posts array

5. Redirect
- Server redirects to /posts using res.redirect()
- Browser makes a new GET request to /posts
- Updated posts are rendered again

Important Notes:
- GET → used for fetching/rendering pages
- POST → used for sending data (form submission)

- res.render() → renders EJS templates
- res.redirect() → triggers a new request

- This follows REST pattern:
  GET /posts       → Read all posts
  GET /posts/new   → Form to create post
  POST /posts      → Create new post
*/

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.listen(port, () => {
    console.log(`Port: ${port}`);
});


let posts = [
    {
        id: uuidv4(),
        username: "AB",
        content: "Hello World 1"
    },

    {
        id: uuidv4(),
        username: "CD",
        content: "Hello World 2"
    },

    {
        id: uuidv4(),
        username: "EF",
        content: "Hello World 3"
    }
]


// Index Route: Used for viewing all the posts.
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

// Create Route: Used for creating a new post.
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let{username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
})

// Show Route: Used for viewing a post, according to id passed.
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    
    res.render("show.ejs", {post});
})

// Update Route: This is going to be used for updating specific post.
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    let newC = req.body.content;
    post.content = newC;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    res.render("edit.ejs", {post});
})

//  Delete Route: Used for deleting any specific post.
app.delete("/post/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})