const express = require('express');
// const { userService } = require('./service');
const { userRouter, categoryRouter, blogPostRouter } = require('./router');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', blogPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
