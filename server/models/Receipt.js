const mongoose = require('mongoose');
const ReceiptSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    credits: {
        type:Number,
    },
    itemName: {
        type: Array,
    },
    itemQuantity: {
        type: Array,
    },
    amount: {
        type: Number
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = Receipt = mongoose.model('receipt',ReceiptSchema);