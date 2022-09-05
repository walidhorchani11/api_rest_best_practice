const express = require('express');

const routerV1 = require('./src/v1/routes');
const routerV2 = require('./src/v2/routes');
const workoutsRoutes = require('./src/v1/routes/workoutsRoutes');

const app = express();

// plural name of recource
app.use('/api/v1/workouts', workoutsRoutes);

// on definit les routes globale comme /api/v1 ou /api/v2
app.use('/api/v1', routerV1);
app.use('/api/v2', routerV2);

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