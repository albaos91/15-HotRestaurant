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


// New Reservation Handling
app.post("/api/reservations", function(req, res){
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    // Array name temporary
    array.push(newReservation);

    res.json(newReservation);
});


// Start server and begin listening
app.listen(PORT, function(){
    console.log(`Server listening on port:${PORT}`);
});