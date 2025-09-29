const express = require('express');
const app = express();
const PORT = 8090;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
