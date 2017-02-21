var db = require("../models");

module.exports = function(app) {
    app.get("/api/burger", function(req, res){
        db.Burger.findAll({}).then(function(dbPost){
            res.json(dbPost);
        });
    });

    app.post("/api/burger", function(req, res){
        db.Burger.create(req.body).then(function(dbPost){
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