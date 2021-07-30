var express = require('express');
var router = express.Router();
var data = require("../controllers");
/* GET users listing. */

router.post("/", data.create);

router.get("/:id", data.report);
module.exports = router;
