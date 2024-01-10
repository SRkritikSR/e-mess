const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    year: {
        type: Number, 
        required: true,
    },
    branch: {
        type: String, 
        required: true,
    },
    credits: {
        type:Number,
    },
    avatar:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = Student = mongoose.model('student',StudentSchema);