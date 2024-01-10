const express = require('express');
const router = express.Router();
const { validationResult } = require("express-validator");
const config = require('config');
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
// const { check,validationResult } = require("express-validator");
// const { findOne } = require('../../models/Menu');
// const config = require('config');
// const jwt = require('jsonwebtoken');

const Order = require('../../models/Order');

router.get('/userId/:userId', async (req, res) => {
    if (req.query.all) {
        try {
            const invoice = await Order.find({});
            res.json(invoice)
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
    else {
        try {
            const invoice = await Order.find({ user: req.params.userId });
            res.json(invoice)
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
})
router.put('/confirmOrder',async (req,res)=> {
    try {
        const result=await Order.findByIdAndUpdate(req.body._id,{isConfirmed: true})
    }
    catch (err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})
router.post('/', async (req, res) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({ errors : errors.array() });
    // }
    try {

        let NewOrder = new Order(
            req.body
        );

        await NewOrder.save();

        const payload = {
            user: {
                id: NewOrder.id
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

})


module.exports = router;