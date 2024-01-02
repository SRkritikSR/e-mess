const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const Food=require('../../models/Food')
router.get('/category/:categoryId',auth,async (req,res)=> {
    
    try {
        const categoriesArray =req.params.categoryId.split(" ");
        const result = await Food.find({ category: { $in: categoriesArray } });
        
        return res.status(200).send(result)
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ errors: error })
    }

})
module.exports = router;