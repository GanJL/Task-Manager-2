const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  urgency: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },

}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;