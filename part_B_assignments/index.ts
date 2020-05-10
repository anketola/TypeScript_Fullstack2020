import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get('/bmi', (req, res) => {
  
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    
    if ( isNaN(weight) || isNaN(height) ) {
      res.status(400).json({
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