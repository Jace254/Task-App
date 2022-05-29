const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/categories',(req,res) => {
    res.send({type: 'GET'});
});

router.post('/categories',(req,res) => {
    res.send({type: 'POST'});
});

router.put('/categories/:id',(req,res) => {
    res.send({type: 'PUT'});
});

router.delete('/categories/:id',(req,res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;