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
    birthyear: {
        type: Number,
    },
    joinedAt: {
        type:Date,
    },
    salary: {
        type: String,
    },
    role: {
        type: String,
    },
    
    
})

module.exports = Employee = mongoose.model('Employee',EmployeeSchema);