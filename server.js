// Dependencies
// ======================================================

var express = require("express");
var path = require("path");

// Express Startup
var app = express();
var PORT = process.env.port || 3000;

// Express handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Table & reservation variables

var activeTables = [];
var waitlist = [];

//Routes displaying HTML pages
app.get("/", function (req, res) {
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


// New Reservation Handling
app.post("/api/reservations", function(req, res){
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);

    if(activeTables.length === 5){
        waitlist.push(newReservation);
        var isOnWaitlist = true;
    } else {
        activeTables.push(newReservation);
        var isOnWaitlist = false;
    }
    
    res.json(newReservation);
    res.send(200,{"isOnWaitlist": isOnWaitlist});
});


// Start server and begin listening
app.listen(PORT, function () {
  console.log(`Server listening on port:${PORT}`);
});
