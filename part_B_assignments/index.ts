import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());


app.get('/hello', (_req, res) => {
  res.send("Hello Full Stack!");
});

app.post("/exercises", (req, res) => {
  const reqBody = req.body;
  const target = reqBody.target;
  const dailyExercises = reqBody.daily_exercises;

  if (!target ||!dailyExercises) {
    return res.status(400).json({
      error: "parameters missing"
    });
  }
  if (isNaN(target) || !Array.isArray(dailyExercises)) {
    return res.status(400).json({
      error: "malformatted parameters"
    });
  }
  if (dailyExercises.some((hour) => isNaN(hour))) {
    return res.status(400).json({
      error: "malformatted parameters"
    });
  }

  const exerciseStatistics = calculateExercises(dailyExercises, target);
  
  return res.json(
    exerciseStatistics
  );

});


app.get('/bmi', (req, res) => {
  
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    
    if (isNaN(weight) ||isNaN(height)) {
      return res.status(400).json({
        error: "malformatted parameters"
      });
    }
    
    const bmi: string = calculateBmi(height, weight);
    
    return res.json({
      weight,
      height,
      bmi
    });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});