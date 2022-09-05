const express = require('express');

const workoutController = require('../controllers/workoutsController')

const router = express.Router();

router.route('/')
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createWorkout);

router.route('/:workoutId')
  .get(workoutController.getOneWorkout)
  .put(workoutController.updateWorkout)
  .delete(workoutController.deleteOneWorkout);

module.exports = router;
