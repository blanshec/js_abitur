const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validate = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validate.isEmail(v),
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  age: Number,
  city: String,
  gto: Boolean,
  essay: String,
  interests: String,
  testResults: {
    testField: {
      name: String,
      result: String,
    },
    testProffesion: {
      name: String,
      result: String,
    },
  },
  exams: {
    examRussian: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examMath: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examSociology: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examGeography: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examBiology: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examChemestry: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examSecondLang: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examHistory: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examLitrature: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
    examPhysics: {
      name: {
        type: String,
        maxlength: 32,
      },
      examGrade: Number,
    },
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByCreds = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw Promise.reject(new Error('fuck'));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw Promise.reject(new Error('fuuck'));
        }
        return user;
      });
    })
    .catch((error) => error);
};

module.exports = mongoose.model('user', userSchema);
