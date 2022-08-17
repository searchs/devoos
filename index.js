const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'CICD app', 
    version: '0.0.4', 
    company: 'MarkTwo Platform' });
});

app.listen(3000, () => console.log(`Listening on port http://localhost:3000`));
