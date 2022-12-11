const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const userRoutes = require('../routes/users/userRoutes');
const projectRoutes = require('../routes/projects/projectRoutes');
const projectsRoutes = require('../routes/projects/projectsRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/project', projectRoutes);
app.use('/projects', projectsRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));