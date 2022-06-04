const { Schema, model } = require('mongoose');

const bloodBankSchema = new Schema({
  name: {
    type: 'string',
    required: [true, 'donor name is required'],
    trim: true,
  },
  city: {
    type: 'string',
    required: [true, 'city name is required'],
    trim: true,
  },
  contactNumber: {
    type: 'string',
    required: true,
    trim: true,
  },
  donors: [],
});

module.exports = model('BloodBank', bloodBankSchema);
