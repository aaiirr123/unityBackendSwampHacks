var express = require("express");
var path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/", require("./routes/api"));
app.use("/images", express.static("./images"));

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})