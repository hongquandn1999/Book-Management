var shortId = require("shortid");
var db = require("../common/db");
module.exports.createGet = function(req, res) {
    res.render("users/create");
};
module.exports.createPost = function(req, res) {
    req.body.id = shortId.generate();

    db.get("listBook")
        .push(req.body)
        .write();
    res.redirect("/");
};
module.exports.search = function(req, res) {
    var q = req.query.q;
    var resultSearch = db
        .get("listBook")
        .value()
        .filter(function(item) {
            return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
    res.render("home/home", {
        listBook: resultSearch
    });
};
module.exports.view = function(req, res) {
    var id = req.params.id;
    var resultView = db
        .get("listBook")
        .find({ id: id })
        .value();
    res.render("users/view", {
        listBook: resultView
    });
};