const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema= new Schema({
    type: String,
    name: String,
    distance: Number, 
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [ExerciseSchema],
    totalDuration: {
        type: Number,
        default: 0
    }
});

WorkoutSchema.methods.setTotalDuration = function() {
    let duration = 0;
    this.exercises.forEach(exercise => {
        duration += exercise.duration;
    });
    this.totalDuration= duration;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports= Workout;