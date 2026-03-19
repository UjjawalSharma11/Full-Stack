/* 
☑️ Node.js is a JavaScript Runtime Environment, which is used for server side programming.
It is not a language, library or framework.
*/

/* 
☑️ process.argv (Command Line Arguments in Node.js)
- process.argv is an array in Node.js that stores command-line arguments
passed when executing a Node.js file.
- It belongs to the global "process" object which provides information
about the current Node.js process.

- Structure of process.argv array:
process.argv[0] → Path of Node.js executable
process.argv[1] → Path of the current script file
process.argv[2+] → Actual arguments passed by the user

- Because the first two values are default, we usually start reading
arguments from index 2.
*/
// let args = process.argv;
// for(let i = 0; i < args.length; i++){
//     console.log("Hello ", args[i]);
// }

/* 
☑️ module.exports & require (Modular Code in Node.js)
- In Node.js, we can split our code into multiple files to make it
modular, reusable, and easy to maintain.

- For this purpose Node.js provides:
    module.exports  → Used to export functions, variables, or objects
    require()       → Used to import them in another file

How it works:
1. In a file, we store functions or variables inside module.exports.
2. Node.js wraps the exported content inside an object.
3. In another file, require("file_path") loads that object.
4. We can then access its properties.

☑️ Importing an Entire Folder using index.js (Node.js)
- To import all modules of a folder, we create an index.js file
inside that folder.
- index.js requires the data from all files of that folder,
stores them together (array/object), and exports them using
module.exports.
- When require("folder_path") is used, Node.js automatically
looks for index.js inside that folder.
- The require() call then returns whatever is exported from
index.js.
*/
// let obj = require("./_Temp");
// console.log(obj.val(2, 3));

/* ☑️ npm (Node Package Manager)
- npm is the default package manager for Node.js.
- It is a large online repository that contains thousands of
reusable packages (libraries) created by developers.
- These packages can be easily installed and used in projects
using npm CLI commands.
- npm helps in managing project dependencies and installing,
updating, or removing packages.
*/

/* ☑️ Installing Packages using npm
- To install a package, first create a project folder and run
npm init -y (or npm init) to initialize npm in that folder.
This creates a package.json file for the project.

- After initialization, packages can be installed using:
npm install packageName
- npm list packageName: Command for checking whether a package is insatlled or not.
----------------------------------------------------

Files/Folders Created:
node_modules
- Contains all installed packages and their dependencies.

package-lock.json
- Stores the exact versions of installed packages and their
sub-dependencies to ensure consistent installs.

package.json
- Stores project information and dependency list.
- If node_modules is deleted, running npm install will
reinstall all packages listed in this file.

----------------------------------------------------

Note:
- Whenever a new package is installed, its name is automatically
added to the "dependencies" section of package.json.
*/

/* ☑️ require vs import
We can't selectively load only the pieces we need with the require but with import, we can selectively load only the pieces we need
which can save the memory.

Loading is synchronous for require but can be asynchronous for import.
*/

// import {sum} from "./_Temp.js";
// console.log(sum(2, 3));

