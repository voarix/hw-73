const express = require('express');

const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

app.get('/hello', (req, res) => {
   return res.send('Hello');
});

app.get('/encode/:value', (req, res) => {
   return res.send(Vigenere.Cipher('password').crypt(req.params.value));
});

app.get('/decode/:value', (req, res) => {
   return res.send(Vigenere.Decipher('password').crypt(req.params.value));
});

app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});
