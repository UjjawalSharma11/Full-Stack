/* ☑️ GET vs POST Requests (Express)
GET:
- Used to request/fetch data from the server.
- Data is sent through query strings (URL).
- Data is visible in the URL and has length limitations.
- Commonly used when the client expects a response.
- Accessed using req.query.

POST:
- Used to send data to the server (e.g., store in database).
- Data is sent in the request body (not visible in URL).
- Commonly used for form submissions and CRUD operations.
- Accessed using req.body.

Body Parsing Middleware:
- Data in req.body is not directly readable by Express.
- To parse form data:
app.use(express.urlencoded({ extended: true }))

- To parse JSON data:
app.use(express.json())
*/
/* const express = require("express");
const app = express();
let port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is at port: ${port}`);
})

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard GET request, welcome ${user}!`);
})

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`Standard POST request!, welcome ${user}!`);
}) */


/* ☑️ JavaScript OOPs
- OOP in JavaScript helps in reusability and avoids creating
similar objects repeatedly.
- Classes act as blueprints to create multiple objects with
similar properties and methods.

Prototypes:
- Prototypes are the mechanism through which objects inherit
properties and methods from other objects.
- Every object in JavaScript has an internal link to a prototype object.
- This prototype acts like a shared template, so methods are not
duplicated for every object.

Example Concept:
- Array.prototype is the main prototype object for all arrays.
- It contains methods like push(), pop(), map(), etc.
- All arrays share the same prototype instead of having their
own copies, which makes memory usage efficient.
*/


/* ☑️ Factory Function
- A factory function is a function that returns objects,
used to create multiple objects of the same structure.
- It improves over manually creating objects by avoiding
repetitive code.

Drawback:
- Each object created by a factory function gets its own
separate copy of all methods (functions).
- This leads to unnecessary memory usage, especially when
many objects are created.
- This problem is solved using prototypes or classes,
where methods are shared instead of duplicated.
*/
/* function createPerson(name, age){
    const p = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${name}`);
        }
    };

    return p;
} */


/* ☑️ Constructor Functions & new Keyword
- Constructor functions are used to create multiple objects
of the same type using a defined structure.
- By convention, constructor names start with a capital letter.
- They do not explicitly return anything; the new object is
returned automatically.

new Keyword:
- Used to create a new instance of a constructor function.
- Internally it does:
  1. Creates a new empty object
  2. Links it to the constructor's prototype
  3. Calls the constructor function with "this" pointing to that object
  4. Returns the newly created object

Note: Even with constructors, methods defined inside them are
copied for every object, unless added to the prototype.
*/
/* function Person(name, age){
    this.name = name;
    this.age = age; 
}  
Person.prototype.talk = function(){
    console.log(`Hi, my name is ${this.name}!`);
}
let p1 = new Person("Ujjawal", 22);
p1.talk(); */


/* ☑️ Classes in JavaScript
- Classes are a modern way to create objects using a clear
and structured syntax (syntactic sugar over prototypes).
- They act as templates (blueprints) for creating objects
with similar properties and methods.
- Methods defined inside a class are automatically stored
in the prototype, so they are shared among all objects.
- This avoids duplication of functions and improves memory efficiency.

Note: Classes internally use prototypes, but we don’t need to
handle them manually.
*/
/* 
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
};

let p1 = new Person("CD", 40);
let p2 = new Person("AB", 50);
console.log(p1.talk() == p2.talk());
 */


/* ☑️ Inheritance in JavaScript (Classes)
- Inheritance allows one class to acquire properties and
methods of another class, enabling code reuse.
- The extends keyword is used to create a child class
from a parent class.
- The super keyword is used to call the constructor
of the parent class inside the child class.

- This helps in building hierarchical relationships
and avoids code duplication.
*/
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}!`);
    }
};

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
};

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
};

let s1 = new Student("AB", 22, 95);
console.log(s1.marks);
s1.talk();