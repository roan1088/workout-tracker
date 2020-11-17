// Importing express server module
const express = require("express");
const path = require("path");

// Setting the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Setting the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// For static files, look in the public folder
app.use(express.static(path.join(__dirname, 'public')));
// API Routes
// HTML Routes
app.use("/", require("./routes/htmlRoutes.js"));

// Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});