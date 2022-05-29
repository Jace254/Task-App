const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/signin',(req,res) => {
    res.send({type: 'GET'});
});

router.post('/signin',(req,res) => {
    res.send({type: 'POST'});
});

router.put('/signin/:id',(req,res) => {
    res.send({type: 'PUT'});
});

router.delete('/signin/:id',(req,res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;