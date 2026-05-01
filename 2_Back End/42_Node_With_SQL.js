/* ☑️ Complete Setup Breakdown

const { faker } = require('@faker-js/faker');
- Imports faker library.
- Used to generate fake/random data (names, emails, etc.).
- Helpful for testing database without real data.

const mysql = require('mysql2');
- Imports mysql2 package.
- Used to connect Node.js with MySQL database.
- Allows executing SQL queries from backend.

const express = require("express");
const app = express();
- Imports Express framework.
- express() creates an application object (app).
- app is your backend server.

const path = require("path");
- Built-in Node.js module.
- Helps in handling file/folder paths safely.
- Used mainly for views/static folder setup.

const methodOverride = require("method-override");
- Middleware used to override HTTP methods.
- HTML forms only support GET and POST.
- Using this, we can simulate PUT, PATCH, DELETE.
Example:
?_method=PATCH → treated as PATCH request

app.use(methodOverride("_method"));
- Activates method override middleware.
- Looks for "_method" in query/body to override request method.

app.use(express.urlencoded({ extended: true }));
- Middleware to parse form data (from POST requests).
- Converts incoming data into req.body object.

app.set("view engine", "ejs");
- Sets EJS as templating engine.
- Allows using res.render() to render .ejs files.

app.set("views", path.join(__dirname, "/views"));
- Tells Express where EJS files are stored.
- __dirname → current directory
- Ensures correct path even if folder structure changes.

app.listen(8080);
- Starts the server on port 8080.
- Server begins listening for incoming requests.

🧠 Overall Flow:
- Server starts on port 8080
- Middleware is configured
- Database + faker ready for use
- EJS setup done for rendering UI
- Ready to handle routes (GET, POST, etc.)
*/

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.listen(8080);

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// console.log(getRandomUser());

/* ☑️ Connecting Node.js with MySQL (mysql2)
- To connect a Node.js backend with a MySQL database,
we use the mysql2 package.
- After installation, it allows us to establish a connection
and execute SQL queries from our server code.

Ways to Execute Queries:
- MySQL Workbench → GUI tool to run queries manually
- MySQL CLI       → using terminal (mysql -u root -p)
- Node.js         → using connection.query() in code
- SQL File        → using source filename.sql in terminal

- mysql2 enables backend applications to interact directly
with the database for performing CRUD operations.
*/

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Ujjwal@11'
});

/* ☑️ Data Insertion
// Inserting data manually.
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [["789", "EF", "ef@gmail.com", "e+f"], ["456", "CD", "cd@gmail.com", "c+d"]];

// Inserting bulk data using faker.
let data = [];
for(let i = 1; i <= 100; i++){
    data.push(getRandomUser());
}

try{
    connection.query(q, [data], (err, result) => {
        if(err) throw err;
        console.log(result);
    })
}
catch(err){
    console.log(err);
}
connection.end(); */


/* ☑️ Route: GET "/"
- When client visits "/", this route is triggered.
- SQL Query: SELECT COUNT(*) AS count FROM user
→ Counts total number of users in database.

- connection.query() executes the query.
- result[0].count extracts the count value.

- res.render("home1.ejs", { count })
→ Renders EJS template and passes count dynamically.

- If any error occurs, it is caught and
"Some error in DB!" is sent as response.
*/
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0].count;
            res.render("home1.ejs", {count});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error in DB!");
    }
})


/* ☑️ Route: GET "/user"
- When client visits "/user", this route is triggered.

- SQL Query:
SELECT * FROM user
→ Fetches all user records from the database.

- connection.query() executes the query.

- The result (array of user objects) is passed directly to the EJS template.

- res.render("user1.ejs", { result })
→ Renders the template and displays all users.

- If any error occurs, it is caught and
an error message is sent as response.
*/
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            res.render("user1.ejs", {result});
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error in DB!");
    }
})


// Route for accepting GET request for edititng the user data.
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit1.ejs", {user});
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error in DB!");
    }
})

// Update route for accepting patch request for updating user data in DB.
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newName} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
   
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            
            if(formPass != user.password){
                res.send("Wrong Password!");
            }
            else{
                let q2 = `UPDATE user SET username='${newName}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error in DB!");
    }
})

 