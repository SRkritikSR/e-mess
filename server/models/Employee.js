const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String, 
        required: true,
    },
    phonenum: {
        type: Number,
    },
    birthdate: {
        type: Date,
    },
    joinedAt: {
        type:Date,
        default: Date.now
    },
    salary: {
        type: Number,
        default: 0,
    },
    messName: {
        type: String,
        default: " ",
    },
    role: {
        type: String,
        default: " ",
    },
    
    
})

module.exports = Employee = mongoose.model('Employee',EmployeeSchema);