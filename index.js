const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;

app.get('/health', async (req, res, next) => {
  try {
    res.json({
      status: 'success',
      statusCode: 200,
      message: 'hello app !'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      statusCode: 500,
      message: error
    })
    console.log('error:::', error);
  }
})

app.listen(PORT, () => console.log(`server listen to port =  ${PORT} `));