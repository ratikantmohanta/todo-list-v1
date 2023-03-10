const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js")


const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {

    if (req.body.list === "Work List") {
        workItems.push(req.body.newItem);
        res.redirect("/work");
    }
    else {
        items.push(req.body.newItem);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {

    res.render("about");
});

app.listen(3000, () => {
    console.log("port opened in 3000.");
    date.sayHello();
});
