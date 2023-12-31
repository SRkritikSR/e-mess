const mongoose=require('mongoose')
const FoodSchema=new mongoose.Schema({
    name: {
        type: String,
    },
    // category can be lunch, dinner, tea, breakfast, or extras
    day: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },

})
module.exports = Food = mongoose.model('food',FoodSchema);
