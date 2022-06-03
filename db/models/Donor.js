const { Schema, model } = require('mongoose');

const donorSchema = new Schema({
  name: {
    type: 'string',
    required: [true, 'donor name is required'],
    trim: true,
  },
  bloodGroup: {
    type: 'string',
    required: [true, 'blood group is required'],
    trim: true,
  },
});

module.exports = model('Donor', donorSchema);
