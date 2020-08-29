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
        question: String,
        answer: { type: [String] },
        realAnswer: String,
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model('Stories', storySchema);
