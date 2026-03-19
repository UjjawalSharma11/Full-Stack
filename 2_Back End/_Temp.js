/* const g = 9.8;
const pi = 3.14;
let val = (x, y) => {
    return x + y;
}
module.exports = {
    g,
    pi,
    val
};
*/

// export const sum = (a, b) => a - b;


let express = require("express");
let app = express();
app.set("view engine", "ejs");

let port = 8080;
app.listen(port, () => {
    console.log(`Port: ${port}`);
});

app.get("/check/:uname", (req, res) => {
    let {uname} = req.params;
    let data = require("./Sample.json");
    let inst = data[uname];
    res.render("sample.ejs", {inst});
});

