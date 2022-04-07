import { ISettings, IWorkout } from '@dgoudie/isometric-types';
import { Model, Schema } from 'mongoose';

import mongoose from 'mongoose';

const workoutSchema = new Schema<IWorkout>(
  {
    userId: mongoose.Types.ObjectId,
    endedAt: Date,
    dayNumber: Number,
    nickname: String,
    checkIns: [Date],
    durationInSeconds: Number,
    exercises: [
      {
        exercise: {
          _id: mongoose.Types.ObjectId,
          name: String,
          primaryMuscleGroup: String,
        },
        sets: [
          {
            resistanceInPounds: Number,
            repetitions: Number,
            timeInSeconds: Number,
            complete: Boolean,
            _id: false,
          },
        ],
        _id: false,
      },
    ],
  },
  { timestamps: true }
);

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
