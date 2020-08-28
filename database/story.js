const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  story: {
    type: String,
    required: true,
  },
  questions: {
    type: [
      {
        questions: String,
        answer: String,
        realAnswer: String,
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model('Stories', storySchema);
