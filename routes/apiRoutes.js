// Importing the express router
const Router = require("express").Router();
const path = require("path");
// Importing the models
const db = require("../models");

// GET all workouts
Router.get("/workouts", (req, res) => {
  db.Workout.find()
  .then(workouts => {
    res.json(workouts);
  })
  .catch(err => {
    res.json(err);
  });
});

// POST a new workout
Router.post("/workouts", (req, res) => {
  db.Workout.create(req.body)
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});

// POST a new exercise and PUT it into a specific workout
Router.put("/workouts/:id", (req, res) => {
});

// GET request for ??
Router.get("/workouts/range", (req, res) => {
});

module.exports = Router;