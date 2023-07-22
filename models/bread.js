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
      default: 'https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2023/04/MAY23_Breakfast_AllHailBiscuit_HatsueAdobeStock.jpg' 
    },
    baker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Baker'
    }
})

breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name} who has been with us since ${this.baker.startDate.getFullYear()}!`
}

breadSchema.methods.hasGlutenParagraph = function() {
  return `and it ${this.hasGluten ? ' does ' : ' does not ' } have gluten`
}

module.exports = mongoose.model('Bread', breadSchema)