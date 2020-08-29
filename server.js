const express = require('express');
// const DB = require('./database/index');
const bodyParser = require('body-parser');

let path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(
    'layout',
    (data = {
      page: 'home',
    })
  );
});
app.get('/quiz', (req, res) => {
  let x = [
    { title: 'one', choices: ['asdfgsdf', 'bbbbb', 'cdbd', 'ddbdb'] },
    { title: 'two', choices: ['aa', 'bb', 'cc', 'dd'] },
    { title: 'three', choices: ['aaa', 'bbb', 'ccc', 'ddd'] },
  ];
  res.render(
    'layout',
    (data = {
      page: 'quiz',
      story: `hello there`,
      questions: x,
    })
  );
});

app.post('/results', (req, res) => {
  console.log(req.body);
  res.render('layout', (data = { page: 'result' }));
});
app.get('/results', (req, res) => {
  console.log(req.body);
  res.render('layout', (data = { page: '' }));
});

app.listen(PORT, console.log(`listening on port : ${PORT}`));
