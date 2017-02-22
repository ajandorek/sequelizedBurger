var db = require("../models");

module.exports = function (app) {
    app.get("/api/burger", function (req, res) {
        db.burger.findAll().then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.post("/api/burger", function (req, res) {
        console.log("Hello");
        db.burger.create(req.body).then(function (dbPost) {
            res.redirect("/");
        });
    });

    app.put("/:id", function (req, res) {
        db.burger.put(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
}