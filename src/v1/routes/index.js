const express = require('express');

const router = express.Router();


router.route('/').get(async (req, res, next) => {
  res.json({ message: `from ${req.baseUrl}` })
})

module.exports = router;

