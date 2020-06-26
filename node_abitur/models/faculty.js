const mongoose = require('mongoose');
const validate = require('validator');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  schoolName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'school',
    required: true,
  },
  places: {
    Departments: {
      type: String,
    },
  },
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

module.exports = mongoose.model('faculty', facultySchema);
