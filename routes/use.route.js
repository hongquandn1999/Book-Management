var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");
var validate = require("../validate/user.validate");

router.get("/create", controller.createGet);

router.post("/create", validate.postCreate, controller.createPost);

router.get("/search", controller.search);

router.get("/search/:id", controller.view);

module.exports = router;