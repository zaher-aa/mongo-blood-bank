const Donor = require('../models/Donor');

const getDonors = () => Donor.find();
const getDonor = (_id) => Donor.findOne({ _id });
const addDonor = ({ name, bloodGroup }) => Donor.create({ name, bloodGroup });

module.exports = { getDonors, getDonor, addDonor };
