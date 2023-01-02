const mongoose = require('mongoose');


const CreditSchema = new mongoose.Schema({
   credits: {
    type: Number,
   },
//    email:{
//       type:String,
//       required:true,
//       unique:true
//   },
})

module.exports =  credit = mongoose.model('credit',CreditSchema);