const express = require('express');

const app = express();
const port = 8000;

app.get('/hello', (req, res) => {
   return res.send('Hello');
});

app.listen(port, () => {
   console.log(`Server started at http://localhost:${port}`);
});
