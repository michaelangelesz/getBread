const router = require('express').Router()
const Bread = require('../models/bread')

// Path: controllers/bread.js
router.get('/', (req, res) => {
    res.send(Bread)
})

router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router