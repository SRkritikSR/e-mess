const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // email: {
    //     type: String,
    // },
    user: {
        type:mongoose.Schema.Types.ObjectId,
    },
    credits: {
        type: Number,
    },
    messName: {
        type: String,
        default: "Common - Mess"
    },
    items: [
        {
            name: {
                type: String,
            },
            _id: {
                type: mongoose.Schema.Types.ObjectId
            },
            quantity: {
                type: Number,
            },
            price: {
                type: Number,
            },
            category: {
                type: String,
            }
        }
    ],
    amount: {
        type: Number
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Order = mongoose.model('order', OrderSchema);