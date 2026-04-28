const express = require("express");
const app = express();
const {faker} = require("@faker-js/faker");
const methodOverride = require("method-override");
const path = require("path");
const mysql = require("mysql2");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(8080);

let getRandomUser = () => {
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Ujjwal@11"
})

let q = `INSERT INTO temp (id, name, email, password) value ?`;
let data = getRandomUser();

try{
    connection.query(q, data, (err, result) => {
        if(err) return err;  
    })
}
catch(err){
    console.log(err);
}
