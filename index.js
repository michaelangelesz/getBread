const express = require('express')
require('dotenv').config()
const breadController = require('./controllers/bread')

const app = express()

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.get('/', (req, res) => {
    res.send('Bread App')
})

// routes
app.use('/breads', breadController)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on port ${PORT}`))