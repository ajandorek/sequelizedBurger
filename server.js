var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3005;
console.log(PORT);
var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

require("./routes/burger-api-routes.js")(app);
require("./routes/handlebar-routes.js")(app);

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});