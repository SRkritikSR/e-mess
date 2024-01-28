const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check,validationResult } = require("express-validator");
const { findOne } = require('../../models/Student');
const config = require('config');
const jwt = require('jsonwebtoken');

const Student = require('../../models/Student');
router.get('/',async (req,res)=> {
    try {
        const students=await Student.find({})
        res.json(students)
    }
    catch (error) {
        res.status(400).json({erros: error})
    }
})
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6})
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const { name, email, branch, year, password} = req.body; 

    try {
        
        let student = await Student.findOne({ email });
        
        if(student){
            return res.status(400).json({ errors: [{msg:'Student already exists'}]});

        }

        const avatar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        student = new Student({
            name,
            email,
            branch,
            year,
            avatar,
            password,
            credits: 10000,
        }); 

        const salt = await bcrypt.genSalt(10);

        student.password = await bcrypt.hash(password,salt);

        await student.save();


        const payload = {
            user : {
                id : student.id
            }
        }
        jwt.sign(payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err,token) =>{
                if(err) throw err;
                res.json({ token })
                localStorage.setItem("sessionUser",token);
            }
            );

        // res.send('User Registered')

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


    
});

module.exports = router;