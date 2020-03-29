module.exports.postCreate = function(req, res, next) {
    var errors = [];
    if (!req.body.name) {
        errors.push("Name is required");
    }
    if (!req.body.author) {
        errors.push("Author is required");
    }
    if (!req.body.language) {
        errors.push("Language is required");
    }
    if (errors.length) {
        res.render("users/create", {
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
};