const mongoose = require('mongoose');
const validate = require('validator');

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  shortenedName: {
    type: String,
    required: true,
    maxlength: 8,
    select: false,
  },
  city: String,
  places: {
    scholarship: {
      type: Number,
      required: true,
    },
    commercial: {
      type: Number,
    },
  },
  averageGrade: Number,
  armyFaculty: Boolean,
  contacts: [
    {
      adress: String,
      phone: String,
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: (v) => validate.isEmail(v),
          message: 'Invalid email format',
        },
      },
    },
  ],
});

module.exports = mongoose.model('school', schoolSchema);
