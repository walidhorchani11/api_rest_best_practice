const createWorkout = async (req, res, next) => {
  try {
    res.json({
      message: 'success',
      status: 200,
      data: {
        name: 'post '

      }
    })
  } catch (error) {
    console.log('error:::', error);
    res.status(500).json({
      statusCode: 500,
      message: 'failed',
      data: {
        key: 'post  error',
        name: 'walid error post '
      }
    })
  }
}

const getAllWorkouts = async (req, res, next) => {
  try {
    res.json({
      message: 'success',
      status: 200,
      data: {
        name: 'get all '

      }
    })
  } catch (error) {
    console.log('error:::', error);
    res.status(500).json({
      statusCode: 500,
      message: 'failed',
      data: {
        key: 'get all',
        name: 'get all'
      }
    })
  }
}

const getOneWorkout = async (req, res, next) => {
  try {
    res.json({
      message: 'success',
      status: 200,
      data: {
        name: 'get one '

      }
    })
  } catch (error) {
    console.log('error:::', error);
    res.status(500).json({
      statusCode: 500,
      message: 'failed',
      data: {
        key: 'hello get one error',
        name: 'walid error get one'
      }
    })
  }
}

const updateWorkout = async (req, res, next) => {
  try {
    res.json({
      message: 'success',
      status: 200,
      data: {
        name: 'put '

      }
    })
  } catch (error) {
    console.log('error:::', error);
    res.status(500).json({
      statusCode: 500,
      message: 'failed',
      data: {
        key: 'hello put error',
        name: 'walid error put'
      }
    })
  }
}

const deleteOneWorkout = async (req, res, next) => {
  try {
    res.json({
      message: 'success',
      status: 204,
      data: {
        name: 'delete'
      }
    })
  } catch (error) {
    console.log('error:::', error);
    res.status(500).json({
      statusCode: 500,
      message: 'failed',
      data: {
        key: 'hello delete error',
        name: 'walid error delete'
      }
    })
  }
}


module.exports = {
  createWorkout,
  getAllWorkouts,
  updateWorkout,
  getOneWorkout,
  deleteOneWorkout
}