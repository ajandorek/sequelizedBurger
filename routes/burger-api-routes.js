var db = require("../models");

module.exports = function(app) {
    app.get("/api/burger", function(req, res){
        db.Burger.findAll({}).then(function(dbPost){
            res.json(dbPost);
        });
    });

    app.post("/api/burger", function(req, res){
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function(dbPost){
            res.json(dbPost);
        });
    });

    app.put("/api/burger/:id", function(req, res){
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