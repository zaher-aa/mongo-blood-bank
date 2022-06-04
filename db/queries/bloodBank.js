const BloodBank = require('../models/BloodBank');

const getBloodBanks = () => BloodBank.find();
const getBloodBank = (_id) => BloodBank.findOne({ _id });
const addBloodBank = ({ name, city, contactNumber }) =>
  BloodBank.create({ name, city, contactNumber });

module.exports = {
  getBloodBanks,
  getBloodBank,
  addBloodBank,
};
