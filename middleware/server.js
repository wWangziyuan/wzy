const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}))

const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbms'
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const [user] = await db.execute(
    'select * from teacher where username=? and password=?',
    ['admin', '123456']
  );
  if (user.length > 0) {
    res.send('ok');
  } else {
    res.send('no');
  }
});

app.post('/', (req, res) => {
  const {username, password} = req.body;
  res.json({
    username: username + 1,
    password: password + 1
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

