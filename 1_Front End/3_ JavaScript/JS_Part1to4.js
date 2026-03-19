// ☑️ PART 1
// NaN: Not a Number. It is used for representing  0 / 0.

// let Keyword: It is used for declaring a variable in JS.
// const Keyword: It is used for declaring a constant variable, which means we can't update or reassign its value later.

// JS is a case sensitive lang.
// TypeScript: Statically typed, that means we can't changed the type of data a variable is storing. Though we can change is JS.



// ☑️ PART 2
// console.log(): It is a method for writing a message on the console.
// console.log("Apna", 123);

// console.log("Hello World!");
// let a = 1;
// let b = 2;
// console.log("Sum is: ", a+b);

// ctrl + l: Command for clearing the console.
// ==: It just compares the value.
// ===: Compares the data type and value.

// Everything in JS is true or false, in boolean context. Suppose if we pass a non zero number in if statment, then it will be concieved as true.
// console.error("error msg"): This will diplay the content as an error.


// 🚨 Template Literals: 
// let age = 20;
// console.log(`Your age is $(age)`);

// 🚨 Conditional Statement:
// let num = prompt("Enter the num: ");
// if(num % 2 == 0){
//     console.log(`${num} is an Even Number.`);
// }
// else{
//     console.log(`${num} is a Odd Number.`);
// }

// let str = prompt("Enter the string: ");
// if(str[0] == 'a' && str.length > 3){
//     console.log("It is a good string!");
// }
// else{
//     console.log("It is a bad string!");
// }

// let d = 1;
// switch(d) {
//     case 0:
//         console.log("It's Sunday");
//         break;
//     case 1:
//         console.log("It's Monday");
//         break;
//     case 2:
//         console.log("It's Tuesday");
//         break;
//     case 3:
//         console.log("It's Wednesday");
//         break;
//     case 4:
//         console.log("It's Thursday");
//         break;
//     case 5:
//         console.log("It's Friday");
//         break;
//     case 6:
//         console.log("It's Saturday");
//         break;
// }
 

// 🚨 User Input:
// prompt(): Method used for taking input from user in JS.
// let firstName = prompt("Enter the first name: ");
// let lastname = prompt("Enter the last name: ");
// let fullName = "Hello " + firstName + " " + lastname;
// alert(fullName); // It is used to display the data in pop up box.

// 🚨 Assignment Question: 

// Q1
/* let num = prompt("Enter a number: ");
if(num % 10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}
 */

// Q2
/* let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
console.log(`${name} is ${age} years old!`);
 */

// Q6
/* let n1 = prompt("N1: ");
let n2 = prompt("N2: ");
if(n1 % 100 == n2 % 100){
    console.log("They have same last two digits.");
}
else{
    console.log("No same last two digit.");
} */



// ☑️ PART 3

// String:
// strName.length is a for finding length of the string.
// + can be used for string concatenation.

// 🚨 String Method: 
// Strings are immutable, that means we can't make changes into the original string.
/*
-> String Methods:
- strName.trim(): It trims the whitespacs in the end and in the beginning of the string, and return a new string.
- strName.toUpperCase(): It converts the entire string into upper case.
- strName.toLowerCase(): It converts the entire string into lower case.
- strName.indexOf('to be found'): It returns the first instance of occurance of the element we are finding.
- strName.slice(si, ei): It will give sub string b/w si and ei. ei is not inclusive.
- strName.replace(oldStr, newStr): It will replace the 1st occurance of the oldStr with newStr.
*/

// let str = "123";
// console.log(str[str.length - 1]);

// let str = "   abc   ";
// console.log(str);
// console.log(str.trim());

// let str1 = "xyz"
// console.log(str1.toUpperCase());
// console.log(str1.slice(0, 2));
// console.log(str1.replace("xy", "p1"));


// 🚨 Arrays: Linear collection data. (It can be of similar data type)
// Arrays are mutable.
 
// let arr = [1, 2, 'abc', 3, 'd'];
// console.log(typeof(arr)); // This will return object.
// console.log(arr.length); // This will return length of the array.
// console.log(arr); // This will print the entire array.
// console.log(arr[2][1]); 

/* 
-> Array Methods:
- arr.push("add"): Adds an element in the end of an array and returns the size of the array.
- arr.pop(): Removes and returns the last element of an array.
- arr.unshift(): Adds an element in the start.
- arr.shift(): Delete from start and returns it.
- arr.indexOf("Find"): Will return the index of the first occurance of the required value.
- arr.includes("Find"): Will return true false on the basis of availability of required element.
- arr.reverse(): It reverses the array.
- arr.slice(si, ei): It gives a sub array.

- arr.splice(si, deleteCount, item0...itemN): This will start deleting the elements from si, for deleteCount times and will add items into the the place of deleted elements.
let array = [1, 2, 3, 4, 5, 6];
let insert = [-1, -2, -3];
array.splice(1, 4, ...insert);
console.log(array); // This will print [1, -1, -2, -3, 6]

🚨 The sort() works perfectly on alphabets, but it shows inaccuracy in case of numbers.
- arr.sort(): 
*/

// let car = ["Toyota", "Land Rover", "BMW", "Mercedes", "Hyundai"];
// console.log(car.pop());
// console.log(car.push("Hyundai"));
// console.log(car); 

// let arrr = ["january", "july", "march", "august"];
// arrr.splice(0, 2, "july", "june");
// console.log(arrr);

// 🚨 When we write let arr = [1, 2, 3], this way we are creating a referance 'arr' that stores the address of 1.
// So when we do let copyArr = arr and make changes in copyArr then changes will get reflected in arr too..because they are both pointing towards the same address.
// For avoiding this we need to make copy of the original array and not the referance to the same address. And this can be done using spread operator.

// 🚨 Assignment Question:
// Q1
/* let x = [1, 2, 3, 4, 5];
let n = parseInt(prompt("Enter the last index: "));
let y = x.slice(0, n);
console.log(y); */



// ☑️ PART 4
// 🚨 Loops: Used for performing same task multiple times.

// Print all odd numbers b/w 1 to 15:
// for(let i = 1; i <= 15; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// Print multiplication table of 5:
// for(let i = 1; i < 11; i++){
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// 🚨 Favourite Movie Game:
// const fav = "Socha Na Tha";
// let guess = prompt("Guess my favourite movie: ");

// while(guess != fav && guess != "Quit"){
//     guess = prompt("You're wrong, guess again: ");
// }

// if(guess == fav){
//     console.log("You guessed correctly.");
// }
// else if(guess == "Quit"){
//     console.log("You quit!!");
// }

// Nested Loops:
// let arr = [[1, 2, 3], [4, 5], [7, 8, 9]];
// for(let i = 0; i < arr.length; i++){
//     console.log(`Values of array ${i}.`);
//     for(let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// 🚨 TO DO App:
// let toDoList = [];
// let cmd = prompt("Enter the command: ");
// while(cmd != "Quit"){
//     if(cmd == "List"){
//         for(let i = 0; i < toDoList.length; i++){
//             console.log(toDoList[i]);
//         }
//     }
    
//     else if(cmd == "Add"){
//         let task = prompt("Enter the task: ");
//         toDoList.push(task);
//     }
    
//     else if(cmd == "Delete"){
//         let del = prompt("Task to be deleted: ");
//         for(let i = 0; i < toDoList.length; i++){
//             if(del == toDoList[i]){
//                 toDoList.splice(i, 1);
//             }
//         }
//     }

//     cmd = prompt("You've not quitted yet, what you wish to do: ");
// }

// if(cmd == "Quit"){
//     console.log("You've quitted!");
// }


// 🚨 Assignment Question:
// Q1
/* let array = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i = 0; i < array.length; i++){
    if(array[i] == num){
        array.splice(i, 1);
    }
}
console.log(array); */

