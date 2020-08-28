const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.json({ success: tre });
});

app.listen(PORT, console.log(`listening on port : ${PORT}`));
