const router = require("express").Router();
const bookControllers = require("../../controllers/bookControllers");

router.route("/")
    .get(bookControllers.findAll)
    .post(bookControllers.create);

router.route("/:id")
    .delete(bookControllers.remove);

module.exports = router;