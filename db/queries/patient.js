const Patient = require('../models/Patient');

const getPatients = () => Patient.find();
const getPatient = (_id) => Patient.findOne({ _id });
const addPatient = ({ name, bloodGroup, contactNumber, bloodBank }) =>
  Patient.create({ name, bloodGroup, contactNumber, bloodBank });

module.exports = { getPatients, getPatient, addPatient };
