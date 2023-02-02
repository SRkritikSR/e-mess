const mongoose = require('mongoose');


const CreditSchema = new mongoose.Schema({
   credits: {
    type: Number,
   }
})

module.exports =  credit = mongoose.model('credit',CreditSchema);