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

//Table & reservation variables

const tables = { table1, table2, table3, table4, table5 };
const reservation = { res1, res2, res3, res4 };

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


// New Reservation Handling
app.post("/api/reservations", function(req, res){
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    // Array name reservation
    reservation.push(newReservation);

    res.json(newReservation);
});


// Start server and begin listening
app.listen(PORT, function () {
  console.log(`Server listening on port:${PORT}`);
});
