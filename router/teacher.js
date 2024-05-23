const { setToken } = require('../middleware/auth');

const login = async (req, res, next) => {
  const { username, password } = req.body;

  let [user] = await req.db.execute(
    'SELECT * FROM `teacher` WHERE `username`=? AND `password`=?',
    [username, password]
  )
  if (user.length > 0) {
    res.send({ code: 0, token: setToken({ id: user[0].id }) });
  } else {
    res.send('Incorrect username or password');
  }
}