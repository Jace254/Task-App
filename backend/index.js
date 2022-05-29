const express = require('express');
const mongoose = require('mongoose');
const createUser = require('./routes/create-user');
const projects = require('./routes/projects');
const categories = require('./routes/categories');
const tasks = require('./routes/tasks');
const Auth = require('./middleware/auth');

require('dotenv').config();

//set up express app
const app = express();



app.use(express.json());

//initialize routes
app.use('/api/user/',createUser);
app.use(projects);
app.use(categories);
app.use(tasks);

//listen for requests
app.listen(process.env.port || 4001,() => {
    console.log("app is running on port 4001");
});

//connect to mongodb
mongoose.connect(process.env.URI,
            {useNewUrlParser: true},
            () => console.log('connected to MongoDB'));



