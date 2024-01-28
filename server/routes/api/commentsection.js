const express = require('express');
const router = express.Router();
const { validationResult } = require("express-validator");
const config = require('config');

const Comment = require('../../models/Comment');

// @route    GET api/comment
// @desc     Get all Comments
// @access   Public
router.get('/userId/:userId', async (req, res) => {

  if (req.query.all) {
    try {
      const comment = await Comment.find({});
      res.json(comment)
    }
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
  else {
    try {
      const userId = req.params.userId
      const comment = await Comment.find({ author: userId }).populate(['mess', 'comment', 'rating']);
      res.json(comment)
    }
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }

} 

}
);


router.post('/',
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { mess, comment, rating, author, authorType } = req.body;
    try {

      let comments = await Comment.findOne({ comment });
      comments = new Comment({
        mess,
        comment,
        rating,
        author,
        authorType
      });

      await comments.save();

      // const payload = {
      //     user : {
      //         id : comments.id
      //       }
      // }

    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }



  });

module.exports = router;