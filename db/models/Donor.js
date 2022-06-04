const { Schema, model } = require('mongoose');

const donorSchema = new Schema({
  name: {
    type: 'string',
    required: [true, 'donor name is required'],
    trim: true,
  },
  bloodGroup: {
    type: 'string',
    enum: ['A', 'B', 'AB', 'O'],
    required: [true, 'blood group is required'],
    trim: true,
  },
});

const Donor = model('Donor', donorSchema);

module.exports = Donor;
