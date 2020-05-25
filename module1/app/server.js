var express = require("express");
var app = express();

var port = process.env.port || 3002;
app.use(express.static("./"));
app.get("/", function(req, res) {
    res.sendFile("./index.html");
});

app.listen(port, function() {
    console.log("express server listening on port " + port);
});