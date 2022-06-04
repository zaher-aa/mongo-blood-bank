// Server and DB setup
require('dotenv').config();
const express = require('express');
const dbConnection = require('./db/connections');
const {
  getDonorsHandler,
  addDonorHandler,
  getDonorHandler,
  getPatientsHandler,
  getPatientHandler,
  addPatientHandler,
  getBloodBanksHandler,
  getBloodBankHandler,
  addBloodBankHandler,
} = require('./controllers');

const { DB_URL } = process.env;

const app = express();

const startServer = async () => {
  try {
    app.listen(app.get('port'), () =>
      console.log(`Server is running on http://localhost:${app.get('port')}`)
    );
    await dbConnection(DB_URL);
    console.log('mongo connected');
  } catch (err) {
    console.log(`Error while connecting to DB ==> ${err}`);
  }
};

const seek = (cb) => {
  return (req, res, next) => {
    try {
      cb(req, res);
    } catch (err) {
      next(err);
    }
  };
};

app.disable('x-powered-by');
app.set('port', 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// ! Donors
app.get('/donors', seek(getDonorsHandler));
app.get('/donor/:_id', seek(getDonorHandler));
app.post('/donor', seek(addDonorHandler));
// ! Patients
app.get('/patients', seek(getPatientsHandler));
app.get('/patient/:_id', seek(getPatientHandler));
app.post('/patient', seek(addPatientHandler));
// ! BloodBanks
app.get('/blood-banks', seek(getBloodBanksHandler));
app.get('/blood-bank/:_id', seek(getBloodBankHandler));
app.post('/blood-bank', seek(addBloodBankHandler));

// Error handlers
app.use((req, res, next) => {
  res.status(400).json({ msg: 'page not found' });
});
app.use((err, req, res, next) => {
  res.status(500).json({ msg: 'internal server error' });
});

// Start the server
startServer();
