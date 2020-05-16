import { NewPatient, Gender } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */

const toNewPatient = (object: any): NewPatient => {
    return {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation)
    }
} 

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    } 
    return gender;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
  
const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseString = (stringtext: any): string => {
    if (!stringtext || !isString(stringtext) ) {
        throw new Error('Incorrect or missing text string: ' + stringtext);
    }
    return stringtext;
};

export default toNewPatient;