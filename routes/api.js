const router = require("express").Router();
const db = require("../models");

// get all exercises for a workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout => {
            dbWorkout.forEach((workout) => workout.setTotalDuration());
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get all workouts
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

// create new workout
router.post("/api/workouts", (req, res) => {
    const workout = req.body
    db.Workout.create(workout)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// add new exercises to existing workouts
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: { exercises: req.body },
            $set: { day: new Date() },
            $inc: { totalDuration: req.body.duration }
        },
        { new: true }
    ).then(workout => {
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;