"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_json_1 = __importDefault(require("../../data/patients.json"));
const utils_1 = __importDefault(require("../utils"));
const patients = patients_json_1.default.map(obj => {
    const object = utils_1.default(obj);
    object.id = obj.id;
    return object;
});
const getNonSensitiveDataPatients = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addPatient = (patient) => {
    const newPatientEntry = Object.assign({ id: (Math.random() * 123456789).toString() }, patient);
    patients.push(newPatientEntry);
    return newPatientEntry;
};
exports.default = {
    getNonSensitiveDataPatients,
    addPatient
};
