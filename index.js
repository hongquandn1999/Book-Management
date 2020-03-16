const express = require("express");
const app = express();
var router = require("./routes/use.route");
var db = require("./common/db");

var bodyParser = require("body-parser");
var port = 3000;

// temple engine
app.set("view engine", "pug");
app.set("views", "./views");
// lowdb

// parse
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// default lowdb

// show all book
app.get("/", function(req, res) {
    res.render("home/home", {
        listBook: db.get("listBook").value()
    });
});
// create book

app.use("/users", router);

app.listen(port, function() {
    console.log("The project have port " + port);
});