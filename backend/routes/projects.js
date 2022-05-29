const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/projects',(req,res) => {
    res.send({type: 'GET'});
});

router.post('/projects',(req,res) => {
    res.send({type: 'POST'});
});

router.put('/projects/:id',(req,res) => {
    res.send({type: 'PUT'});
});

router.delete('/projects/:id',(req,res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;