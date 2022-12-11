const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const userRoutes = require('../routes/users/userRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));