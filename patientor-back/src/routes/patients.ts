import express from 'express';
import patientsServices from '../services/patientsServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientsServices.getNonSensitiveDataPatients());
});

export default router;