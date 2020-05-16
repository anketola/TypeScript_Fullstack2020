"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsServices_1 = __importDefault(require("../services/patientsServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.json(patientsServices_1.default.getNonSensitiveDataPatients());
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = utils_1.default(req.body);
        const addedEntry = patientsServices_1.default.addPatient(newPatientEntry);
        res.json(addedEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
