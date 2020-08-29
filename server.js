const express = require('express');
const DB = require('./database/index');
const bodyParser = require('body-parser');

const Main = require('./routes/index');
const Quiz = require('./routes/quiz');

let path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Main);
app.use('/quiz', Quiz);

app.use('*', (req, res) => {
  res.render('layout', (data = { page: 'error' }));
});

app.listen(PORT, console.log(`listening on port : ${PORT}`));
