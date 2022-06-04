const {
  getDonors,
  addDonor,
  getDonor,
  getPatients,
  getPatient,
  addPatient,
  getBloodBanks,
  getBloodBank,
  addBloodBank,
} = require('../db/queries');

// ! Donor queries
const getDonorsHandler = async (req, res) => {
  const donors = await getDonors();
  res.json({ data: donors });
};

const getDonorHandler = async (req, res) => {
  const { _id } = req.params;

  const donor = await getDonor({ _id });
  res.json({ data: donor });
};

const addDonorHandler = async (req, res) => {
  const { name, bloodGroup, bankId } = req.body;

  const { modifiedCount: donorAdded } = await addDonor({
    name,
    bloodGroup,
    bankId,
  });
  res.json({ data: { added: Boolean(donorAdded) }, msg: 'New Donor Added' });
};

// ! Patient queries
const getPatientsHandler = async (req, res) => {
  const patients = await getPatients();
  res.json({ data: patients });
};

const getPatientHandler = async (req, res) => {
  const { _id } = req.params;

  const patients = await getPatient({ _id });
  res.json({ data: patients });
};

const addPatientHandler = async (req, res) => {
  const { name, bloodGroup, contactNumber, bloodBank } = req.body;

  const patient = await addPatient({
    name,
    bloodGroup,
    contactNumber,
    bloodBank,
  });
  res.json({ data: patient, msg: 'New Patient Added' });
};

// ! Blood banks queries
const getBloodBanksHandler = async (req, res) => {
  const bloodBanks = await getBloodBanks();
  res.json({ data: bloodBanks });
};

const getBloodBankHandler = async (req, res) => {
  const { _id } = req.params;

  const bloodBank = await getBloodBank({ _id });
  res.json({ data: bloodBank });
};

const addBloodBankHandler = async (req, res) => {
  const { name, city, contactNumber } = req.body;

  const bloodBank = await addBloodBank({
    name,
    city,
    contactNumber,
  });
  res.json({ data: bloodBank, msg: 'New Blood Bank Added' });
};

module.exports = {
  getDonorsHandler,
  getDonorHandler,
  addDonorHandler,
  getPatientsHandler,
  getPatientHandler,
  addPatientHandler,
  getBloodBanksHandler,
  getBloodBankHandler,
  addBloodBankHandler,
};
