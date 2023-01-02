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

const Credits = require('../../models/Credits');


router.post('/', async (req,res)=> {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({ errors : errors.array() });
    // }
    console.log(req.body)
    const {credits}=req.body
    try {
        
        let NewCredits = new Credits({
            credits,
        });

        await NewCredits.save();

        const payload = {
            user : {
                id : NewCredits.id
              }
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
    
}) 


module.exports = router;