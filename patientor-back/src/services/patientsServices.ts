import patientsData from '../../data/patients.json';
import { Patient, NonSensitiveDataPatients } from '../types';

const patients: Array<NonSensitiveDataPatients> = patientsData;

const getNonSensitiveDataPatients = (): NonSensitiveDataPatients[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
      }));
};

export default {
    getNonSensitiveDataPatients,
};