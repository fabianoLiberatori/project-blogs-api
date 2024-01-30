const express = require('express');
const { userService } = require('./service');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.login(email, password);
  console.log(result);
  res.json({
    message: 'ok',
  });
});

// ...
// For Initial Commit

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
