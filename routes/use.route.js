var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");

router.get("/create", controller.createGet);

router.post("/create", controller.createPost);

router.get("/search", controller.search);

router.get("/search/:id", controller.view);

module.exports = router;