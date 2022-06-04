const { addDonor, getDonor, getDonors } = require('./donor');
const { addPatient, getPatient, getPatients } = require('./patient');
const { addBloodBank, getBloodBank, getBloodBanks } = require('./bloodBank');

module.exports = {
  addDonor,
  getDonor,
  getDonors,
  addPatient,
  getPatient,
  getPatients,
  addBloodBank,
  getBloodBank,
  getBloodBanks,
};
