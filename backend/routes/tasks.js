const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/tasks',(req,res) => {
    res.send({type: 'GET'});
});

router.post('/tasks',(req,res) => {
    res.send({type: 'POST'});
});

router.put('/tasks/:id',(req,res) => {
    res.send({type: 'PUT'});
});

router.delete('/tasks/:id',(req,res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;