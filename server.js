// dependencies

var express = require("express")
var path = require("path")

var app = express();
var PORT = 3000;


// variables server add
var tables = [
    {
        ID: "afhaque89",
        name: "Ahmed",
        Email: "ahmed@example.com",
        Phone: "000 - 000 - 0000"
    },
    {
        ID: "dgarza",
        name: "david garza",
        email: "dg@mail.com",
        phone: "000 - 123 - 4566"
    },
    {
        ID: "bMc",
        name: "david garza",
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

app.post("/api/tables", function (req, res) {
    var newTable = req.body;

    newTable.ID = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable)

})

app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "all.html"))
})

app.get("/api/tables", function (req, res) {
    return res.json(tables)
})

//listen on the port difference
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
})