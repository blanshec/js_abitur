const mongoose = require('mongoose');

const programmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  programmCode: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  schoolName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'school',
    required: true,
  },
  facultylName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'faculty',
    required: true,
  },
  places: {
    scholarship: {
      type: Number,
      required: true,
    },
    commercial: {
      type: Number,
    },
  },
  subjects: [
    {
      subject: String,
      grade: Number,
    },
  ],
  formsOfEducation: [
    {
      type: String,
    },
  ],
  levelsOfEducation: [
    {
      type: String,
    },
  ],
  cost: Number,
  averageGrade: Number,
  educationDuration: String,
  language: String,
  fieldOfStudy: [
    {
      type: String,
    },
  ],
});

module.exports.getRecProgramms = (req, res, next) => {
  Programm.find({ subjects: req.subjects, fieldOfStudy: req.interests })
    .populate('school')
    .then((programms) => res.send({ data: programms }))
    .catch(() => next(new Error500('Error reading programms list')));
};

module.exports = mongoose.model('programm', programmSchema);
