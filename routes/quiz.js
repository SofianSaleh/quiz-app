const express = require('express');
const router = express.Router();
require('dotenv').config();

const Story = require('../database/story');
const { update } = require('../database/story');

router.get('/', async (req, res) => {
  console.log(req.body);
  let story = await Story.find();
  let theChosenOne = story[Math.floor(Math.random() * story.length)];
  res.render(
    'layout',
    (data = {
      page: 'quiz',
      questions: theChosenOne,
    })
  );
});

router.post('/', async (req, res) => {
  try {
    let newStory = await Story.create(req.body);
    res.send({ success: true, msg: newStory });
  } catch (e) {
    console.log(e);
  }
});

router.put('/', async (req, res) => {
  try {
    let updated = await Story.update({ _id: req.body.id }, req.body);
    res.send({ success: true, msg: updated });
  } catch (e) {
    console.log(e);
  }
});

router.delete('/', async (req, res) => {
  try {
    let updated = await Story.deleteOne({ _id: req.body.id });
    res.send({ success: true, msg: 'Deleted successfully' });
  } catch (e) {
    console.log(e);
  }
});

router.post('/results', async (req, res) => {
  try {
    let story = await Story.findById(req.body.id);
    // Checking logic
    let answerkeys = Object.keys(req.body);
    answerkeys = answerkeys.slice(0, answerkeys.length - 1);
    let total = 0;
    for (let i = 0; i < answerkeys.length; i++) {
      if (
        story['questions'][answerkeys[i]]['realAnswer'] ===
        req.body[answerkeys[i]]
      ) {
        total += 5;
      }
    }
    total = Math.round((total / 50) * 100);
    res.render('layout', (data = { page: 'result', result: total }));
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
