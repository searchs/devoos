const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Allo Ola!', version: '0.0.1' });
});

app.listen(3000, () => console.log(`Listening on port http://localhost:3000`));
