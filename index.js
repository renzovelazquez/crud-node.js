require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const mainRoutes = require('./src/routes/main.routers');
app.use('/', mainRoutes);

app.use(require('./src/routes/productos.routers'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

