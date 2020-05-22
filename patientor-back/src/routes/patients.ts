import express from 'express';
import patientsServices from '../services/patientsServices';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.json(patientsServices.getNonSensitiveDataPatients());
});

router.get('/:id', (req, res) => {
    const patient = patientsServices.findById(req.params.id);
    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatient(req.body);
        const addedEntry = patientsServices.addPatient(newPatientEntry);
        res.json(addedEntry);
    } catch (e) {
        res.status(400).send(e.message);
    } 
});

export default router;