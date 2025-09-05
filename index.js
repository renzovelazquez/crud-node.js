require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hola Mundo!!');
});
app.get('/about', (req, res) => {
  res.send('About Page');
});
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
app.get('/products', (req, res) => {
  res.send('Products Page');
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

