const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
  name: {
    type: 'string',
    required: [true, 'patient name is required'],
    trim: true,
  },
  bloodGroup: {
    type: 'string',
    required: [true, 'blood group is required'],
    trim: true,
  },
  contactNumber: {
    type: 'string',
    required: true,
    trim: true,
  },
  bloodBank: {
    type: Schema.Types.ObjectId,
    ref: 'BloodBank',
  },
});

module.exports = model('Patient', patientSchema);
