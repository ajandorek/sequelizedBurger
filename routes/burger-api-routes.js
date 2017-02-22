var db = require("../models");
console.log("hi");

module.exports = function(app) {
    app.get("/api/burger", function(req, res){
        console.log("hello");
        db.Burger.findAll({}).then(function(dbPost){
            res.json(dbPost);
        });
    });

    app.post("/api/burger", function(req, res){
        console.log("Hello");
        db.Burger.create({
            burger_name: req.body
        }).then(function(dbPost){
            res.json(dbPost);
        });
    });

    app.put("/:id", function(req, res){
        db.Burger.put(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbPost){
                res.json(dbPost);
        });
    });
}