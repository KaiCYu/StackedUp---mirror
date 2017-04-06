const db = require('./db/index');
const express = require('express');

const port = 8000;

const app = express();

app.use(express.static(`${__dirname}/../app/dist`));
app.listen(process.env.PORT || port, () => {
  /* eslint-disable no-console */
  console.log(`Server now listening on port ${port}`);
  /* eslint-enable no-console */
});
