const Donor = require('../models/Donor');
const BloodBank = require('../models/BloodBank');

const getDonors = () => Donor.find();
const getDonor = (_id) => Donor.findOne({ _id });
const addDonor = async ({ name, bloodGroup, bankId }) => {
  const { _id: donorId } = await Donor.create({ name, bloodGroup });

  return BloodBank.updateOne(
    { _id: bankId },
    {
      $push: { donors: donorId },
    }
  );
};

module.exports = { getDonors, getDonor, addDonor };
