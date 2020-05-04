const bcrypt = require('bcryptjs');
const mongoose = require('../../database');
const mailer = require('../../modules/mailer');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  createsAt: {
    type: Date,
    default: Date.now,
  },
});


const task = mongoose.model('Task', taskSchema);
module.exports = task;