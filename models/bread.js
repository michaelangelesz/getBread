const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    hasGluten: { 
      type: Boolean 
    },
    img: { 
      type: String, 
      default: 'https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2023/04/MAY23_Breakfast_AllHailBiscuit_HatsueAdobeStock.jpg' }
})

module.exports = mongoose.model('Bread', breadSchema)