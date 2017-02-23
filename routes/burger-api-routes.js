var db = require("../models");

module.exports = function (app) {
    
    app.get("/", function (req, res) {
        db.burger.findAll({}).then(function (dbPost) {
            var burger = {
                burger: dbPost
            };
            res.render("index", burger);
        });
    });

    app.post("/api/burger", function (req, res) {
        console.log("Hello");
        db.burger.create(req.body).then(function (dbPost) {
            res.redirect("/");
        });
    });

    app.put("/api/burger/:id", function (req, res) {
        console.log("hi");
        db.burger.update({
            devoured: req.body
        }, {
            where: {
                id: req.body.id
            }
            }).then(function (dbPost) {
                console.log("hello");
                res.json(dbPost);
            });
    });
};