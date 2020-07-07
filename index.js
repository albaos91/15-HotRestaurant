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


// Start server and begin listening
app.listen(PORT, function(){
    console.log(`Server listening on port:${PORT}`);
});