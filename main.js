// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  

// Reservations Characters (DATA)
// =============================================================
var reservations = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  console.log("Welcome to the Home page")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
    console.log("Welcome to the Reservation page!")
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/makereservations", function(req, res) {
    console.log("Welcome to the Book a Reservation page!")
    res.sendFile(path.join(__dirname, "makereservations.html"));
});
  

//   // Displays all characters
//   app.get("/api/characters", function(req, res) {
//     return res.json(characters);
//   });
  
//   // Displays a single character, or returns false
//   app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
  

// //**********************************************************************************************

// // Create New Characters - takes in JSON input
// app.post("/reservations", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newReservation = req.body;

//   console.log(newReservation);

//   // We then add the json the user sent to the character array
//   reservations.push(newReservation);

//   // We then display the JSON to the users
//   res.json(newReservation);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
