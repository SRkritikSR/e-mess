
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");
const { findOne } = require('../../models/Employee');
const config = require('config');
const jwt = require('jsonwebtoken');

const Employee = require('../../models/Employee');
router.get('/', async (req,res)=> {
    try {
        const result = await Employee.find({})
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json({errors: error})
    }
})
router.put('/', async(req,res)=> {
    try {
        const updatedEmployee=req.body
        console.log(`the recieved request contains the following body ${req.body._id}`)
        const result=await Employee.updateOne({_id: updatedEmployee._id},updatedEmployee )
        console.log(`employee updated successfully`,result)
        return res.status(200).json(result)
    }
    catch (error) {
        return res.status(500).json({errors: error})
    }
} )
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, phonenum, birthdate } = req.body;

        try {

            let employee = await Employee.findOne({ email });

            if (employee) {
                return res.status(400).json({ errors: [{ msg: 'employee already exists' }] });

            }
            // Avatar of your gmail photo
            // const avatar = gravatar.url(email,{
            //     s:'200',
            //     r:'pg',
            //     d:'mm'
            // })

            employee = new Employee({
                name,
                email,
                password,
                phonenum,
                birthdate,
            });

            const salt = await bcrypt.genSalt(10);

            employee.password = await bcrypt.hash(password, salt);

            await employee.save();


            const payload = {
                user: {
                    id: employee.id
                }
            }
            jwt.sign(payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                    localStorage.setItem("sessionemployee", token);
                }
            );

            // res.send('employee Registered')

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }



    });

module.exports = router;