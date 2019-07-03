// dependencies

var express = require("express")
var path = require("path")

var app = express();
var PORT = 3000;


// variables server add
var reservations = [
    {
        ID: "afhaque89",
        Name: "Ahmed",
        Email: "ahmed@example.com",
        Phone: "000 - 000 - 0000"
    },
    {
        ID: "dgarza",
        Name: "david garza",
        email: "dg@mail.com",
        phone: "000 - 123 - 4566"
    },
    {
        ID: "bMc",
        Name: "david garza",
        email: "dg@mail.com",
        phone: "000 - 123 - 4566"
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"))
})

app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "all.html"))
})

app.get("/api/reservations", function (req, res) {
    return res.json(reservations)
})

//listen on the port difference
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
})