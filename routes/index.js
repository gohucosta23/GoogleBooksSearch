const path = require("path");
const apiRoutes = require("./api");
const router = require("express").router();

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;