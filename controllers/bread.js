const router = require('express').Router()

// Path: controllers/bread.js
router.get('/', (req, res) => {
    res.send('BREAD')
})

module.exports = router