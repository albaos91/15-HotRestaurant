// Dependencies
// ======================================================

var express = require("express");
var path = require("path");
const { json } = require("express");

// Express Startup
var app = express();
var PORT = process.env.port || 3000;

// Express handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes displaying HTML pages
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//Routes displaying table data
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Start server and begin listening
app.listen(PORT, function () {
  console.log(`Server listening on port:${PORT}`);
});
