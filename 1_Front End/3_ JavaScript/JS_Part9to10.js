// ☑️ PART 9
/* 
- DOM: Document Object Model
It represents a document(HTML & CSS) with a logical tree.
It allows us to manipulate webpage content.
Every element/tag of HTML becomes object in the JS.

🔥 The document object represents the entire HTML page that is loaded in the browser, 
and it provides properties and methods to access, manipulate, and interact with the page’s structure, content, and related objects.

🔥When an element is selected by id, we get a single element object.
When elements are selected by class or tag, we get a collection (list) of element objects.

*/

// Selecting an element on the basis of id name. After selection we're accessing the tagName property of the selected object.
// console.log(document.getElementById("mainImg"));

// Selecting an element on the basis of class name.
// console.log(document.getElementsByClassName("oldImg"));
 
// querySelector(): This is used for selecting first instance of passed tag/id/class.
// querySelectorAll(): This is used for selecting all instances of passed tag/id/class.
// console.log(document.querySelectorAll(".oldImg"));

// Manipulating Content:
// document.querySelector("p").innerHTML = "<b>Hello World</b>"; // This will interpret <b></b> as bold tags.
// document.querySelector("p").innerText = "<b>Hello World</b>"; // This will interpret <b></b> as the part of the string/content and not as the HTML markup.

// Manipulating Attributes:
// let obj = document.querySelector('img');
// console.log(obj.getAttribute("id"));
// obj.setAttribute("id", "xyz"); // This will set the id attribute of the img to xyz.

// Manipulating Style;
// let heading = document.querySelector("h1").style.backgroundColor = "green";
// style property can't be used to access the style set in css file, it is used only for inline styling.

// Classlist:
// console.log(document.querySelector('img').classList); // Will give a list of al the classes set for img.
// let heading = document.querySelector("h1");
// heading.classList.add("green");
// console.log(document.querySelector("h1").classList);
// heading.classList.remove("green");

// Navigation: 
// let box = document.querySelector(".box");
// console.log(box.children);
// console.log(box.childElementCount);
// There are also properties like previousElementSibling and nextElementSibling.

// Adding Elements:
/* let newPara = document.createElement("p") // This will create a new element.
newPara.innerHTML = "Hello, we added a new paragraph!";
let body = document.querySelector("body"); */
// body.append(newPara); // This way we are appending the newPara in the end of the body.
// body.insertAdjacentElement("beforebegin", newPara);
// body.insertAdjacentElement("beforeend", newPara);

// 🔥 Practice Question
/* let body = document.querySelector("body");
let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerHTML = "Ok";
inp.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");
body.append(inp);
body.append(btn);

document.querySelector("#btn").classList.add("design");
let heading = document.createElement("h1");
heading.innerHTML = "<i>DOM</i> Practice";
body.insertAdjacentElement("beforebegin", heading);
heading.classList.add("design"); */
   


// ☑️ PART 10
/* 
- Events are signals that something has occurred.

- onclick:
- onmouseenter:
*/

/* let btn = document.querySelector("button");
btn.onclick = () => {
    console.log("You clicked the button!");
}

btn.onmouseenter = () => {
    console.log("You hovered over the the button!!");
}
 */
/* let click = function (){
    console.log('Hello World!');
}
btn.onclick = click; */ // Note that we're not calling function here.


// Event Listeners: Can be used for executing multiple task for an event.
// element.addEventListeners(event, callback);
// 🚨 Whenever addEventListener is used, the browser automatically passes an 'event' object as the first argument to the callback function.
// This object (commonly named event or e) contains information about the event that occurred.

/* let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log("Content 1");
})

btn.addEventListener("click", () => {
    console.log("Content 2");
}) */


// 🚨 Activity
/* let btn = document.querySelector('button');
let div = document.querySelector("div");
btn.addEventListener("click", () => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}); */


// this in Event Listener
// When 'this' is used in a callback of an event handler of something, it refers to that something.
/* let h1 = document.querySelector("h1");
let p = document.querySelector("p");
function clicked() {
    let which = this.innerText;
    console.log(`${which} is clicked!`);
}
h1.addEventListener("click", clicked);
p.addEventListener("click", clicked); */


// Keyboard Events
// key: What actually getting visible on screen.
// code: Gives the code of the key.
// let inp = document.querySelector("input");
/* inp.addEventListener("keydown", () => {
    console.log("Key was pressed!");
}); */

/* inp.addEventListener("keyup", (event) => {
    console.log(event.key);
    console.log(event.code);
    console.log("Key was released!");
}); */


// Form Events
/* let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // A method used for omitting the default task of that event.
    console.log("Form Submitted!");
}) */

// Extracting Form Data
// value property is used for extracting the data entered by the user.
/* let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // let inp = document.querySelector("input");
    // console.log(inp.value);

    // Accessing the form elements using elements property.
    let name = form.elements[0];
    let mail = form.elements[1];
    console.log(name.value);
    console.log(mail.value);
}); */


// More Events
// change Event: The change event occurs when the value of an element has been changed(for form elements).
// input Event: The input event fires when the value of an element is changed (catches every small change).

// event.stopPropagation() is a method used for preventing event bubbling.

// 🚨 To Do App
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerHTML = inp.value;
    
    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.classList.add("del")
    
    del.addEventListener("click", function(){
        this.parentElement.remove();
    });   

    item.appendChild(del);
    list.appendChild(item);
    inp.value = "";
})




