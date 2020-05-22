import patientsData from '../../data/patients.json';
import { Patient, NewPatient, NonSensitiveDataPatients, PublicPatient } from '../types';
import toNewPatient from "../utils";

const patients: Patient [] = patientsData.map(obj => {
    const object = toNewPatient(obj) as Patient
    object.id = obj.id
    return object
});

const findById = (id: string): Patient | undefined => {
    const patient = patients.find(p => p.id === id);
    return patient;
};


const getNonSensitiveDataPatients = (): NonSensitiveDataPatients[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
      }));
};

const addPatient = ( patient: NewPatient ): Patient => {
  
    const newPatientEntry = {
    id: (Math.random() * 123456789).toString(),
    ...patient
  };
  
  patients.push(newPatientEntry);
  return newPatientEntry;
}

export default {
    getNonSensitiveDataPatients,
    addPatient,
    findById
};