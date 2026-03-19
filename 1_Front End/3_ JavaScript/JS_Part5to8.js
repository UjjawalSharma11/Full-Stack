// ☑️ PART 5

/* Object: Used to store keyed collections and complex entities.
- We can't access the values with the help of indices in an object.
- All keys in an object is string, even if we use numbers.

- delete objName.key will delete the key from the objName.
*/

/* const student = {
    Ujjawal: {
        age: 22,
        city: "Jaipur",
        marks: 95
    },

    Antonio: {
        age: 23,
        city: "Cuba",
        marks: 69
    }
}; */

// Different ways of accessing the content of the oject.
/* alert(student.name);
alert(student["age"]);
let x = "age";
alert(student[x]);
*/

// Add/Update Value
/* student["name"] = "Antonio";
student["gender"] = "Male"; */

// alert(student["Antonio"]["age"]);

// Math Object
/* console.log(Math.floor(1.999));
console.log(Math.ceil(1.999));
console.log(Math.ceil(-1.2)); */

// console.log(Math.ceil(Math.random() * 10)); // It gives a random integer between 1 to 10.
// console.log(Math.floor(Math.random() * 5) + 20); // It gives a random integer between 20 to 24.

// Guessing Game
/* let max = prompt("Enter the maximum number: ");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number: ");

while(guess != "quit" && guess != random){
    if(guess < random){
        guess = prompt("Your guess was small! Try again: ");
    }

    else{
        guess = prompt("Your guess was large! Try again: ");
    }
}

if(guess == "quit"){
    console.log("You Quit!!");
}
else{
    console.log("Bingoo, you guessed rightly!");
}
*/



// ☑️ PART 6

/* 
Functions: It is the block of code that can be used multiple times by just calling its name.
- Once a compiler (more precisely, during program execution) encounters a return statement in a function, 
the control immediately exits that function. 

Scope: It determines the access of variables, objects and functions from different parts of the code.
- Function Scope: A variable/object define inside a function is not accessible outside that function.
- var keyword is used for declaring variables at global scope, even if it is defined inside a block.
- Lexical Scope: In nested functions, variable defined in outer functions can be accessed in inner function but vice versa is not true.

*/

/* function greet(name){
    alert(`Hello ${name}, how're you?`);
}

let n = prompt("Enter your name: ");
greet(n); */

// Function with arguments
/* function avg(n1, n2, n3){
    console.log("Average of the three num is: " + (n1 + n2 + n3)/3);
}
avg(2, 4, 6); */

/* function sumN (n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }

    return sum;
}
console.log(sumN(5)); */

// Scope
/* let sum = 10;
function calSum(x, y){
    // sum = x + y; // This is the sum from global scope.
    let sum = x + y // This is the sum from function scope.
    console.log(sum);
}

calSum(2, 3);
console.log(sum); */


// Function Expression: Storing a function definition into a variable.
/* let sum = function(a, b){
    return (`Sum is ${a + b}`);
}

console.log(sum(2, 4)); */

// Higher Order Functions: A function that returns a function or take multiple/one function as argument.
// Case1
/* function greet(name){
    alert(`Hello ${name}, how're you?`);
}

let n = function(){
    prompt("Enter your name");
}

greet(n()); // Note that as we want the value returned by function n, we need to call it while passing it into greet().*/

// Case2
/* function factory(request){
    if(request == "odd"){
        return function(num){
            console.log(!(num % 2 == 0));
        }
    }
    else if(request == "even"){
        return function(num){
            console.log(num % 2 == 0);
        }
    }
    else{
        console.log("Wrong request!");
    }
}

let check = factory("even");
check(3); */



// ☑️ PART 7
/* 
this: Refers to an object that is executing the current piece of code.

*/

/* const student = {
    name: "Ujjawal",
    eng: 90,
    math: 96,
    avg: function(){
        console.log(`Average marks of ${this.name} is ${(this.eng + this.math) / 2}.`);
    }
}
student.avg(); */

// Try-Catch Block:
/* console.log("Hello");
console.log("Hi");
try {
    console.log(a);
}
catch(err) {
    console.log(err); // Will print the actual error that the compiler will throw.
    console.log("Variable not defined before use!") // Custom catch statement.
}
console.log("Bye"); */

// Arrow Functions: const func = (...args) => {definition};
/* let sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 3)); */

// setTimeout & setInterval
// Callback Function: A function which is passed as an argument in a function.
/* console.log("Hello!");
setTimeout(() => {
    console.log("Ujjawal");
}, 1000);
console.log("How're you, ");
 */

// setInterval(() => {
//     console.log("Hello");
// }, 2000);

// 🔥 this Keyword with Arrow Function:
/* 
- In case of normal functions, 'this' is dependent upon the calling object.
- In case of arrow functions, 'this' is dependent on the scope of the parent. 
🚨 In JavaScript, this refers to the execution context of a function and is determined at runtime based on how the function is called, not by where an object is defined;
objects themselves do not create a this context—normal functions get this from their caller, 
arrow functions inherit this lexically from their surrounding scope, 
and using this directly in an object property (like prop: this) evaluates it immediately at object creation time, usually referring to the global object (or undefined in strict mode).

*/

/* const student = {
    name: "Ujjawal",
    marks: 95,
    prop: this, // This will give window, as window is calling this object.

    getName: function(){
        console.log(this);
        console.log(this.name);
    },

    getMarks: () => {
        console.log(this);
        console.log(this.marks);
    }
}

console.log(student.prop);
student.getName();
student.getMarks(); */



// ☑️ PART 8