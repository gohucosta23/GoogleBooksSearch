const router = require("express").router();
const bookControllers = require("../../controllers/bookControllers");

router.route("/")
    .get(bookControllers.findAll)
    .post(bookControllers.create);

router.route("/:id")
    .delete(booksController.remove);

module.exports = router;