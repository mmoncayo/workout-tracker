const router = require("express").Router();
const db = require("../models");

// get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// create new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// add new exercises to existing workouts
router.put("/api/workouts/:workout", ({ params, body }, res) => {
    db.Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { upsert: true, useFindAndModify: false },
        updateWorkout => {
            res.json(updateWorkout);
        })
});

module.exports = router;