"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
/* eslint-disable @typescript-eslint/no-explicit-any */
const toNewPatient = (object) => {
    return {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation)
    };
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseString = (stringtext) => {
    if (!stringtext || !isString(stringtext)) {
        throw new Error('Incorrect or missing text string: ' + stringtext);
    }
    return stringtext;
};
exports.default = toNewPatient;
