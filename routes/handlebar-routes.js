var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render(path.join(__dirname + "/../views/index.handlebars"))
    });
    app.get("/", function(req, res){
        res.render(path.join(__dirname + "/../views/layouts/main.handlebars"))
    });
}