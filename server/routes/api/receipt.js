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

const Receipt = require('../../models/Receipt');

router.get('/', async (req, res) => {
    try {
      const invoice = await Receipt.find({});
      res.json(invoice)
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})
router.post('/', async (req,res)=> {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({ errors : errors.array() });
    // }
    console.log(req.body,Receipt)
    try {
        
        let NewReceipt = new Receipt(
            req.body
                );

        await NewReceipt.save();

        const payload = {
            user : {
                id : NewReceipt.id
              }
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
    
}) 


module.exports = router;