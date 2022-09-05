const express = require('express');

// creer middleware router avec express
const router = express.Router();

// definir url et handler associé à ce middleware specifique à une methode comme get, poste, put, delete
router.route('/').get(async (req, res, next) => {
  try {
    res.json({
      message: `hello from ${req.baseUrl}`,
      statusCode: 200,
      status: 'success'
    })
  } catch (error) {
    res.json({
      message: `hello from ${req.baseUrl}`,
      statusCode: 500,
      status: 'failed'
    });
    console.log('error:::', error);
  }
})

module.exports = router;