const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const postingRouter = require('./posting');
const stackRouter = require('./stack');
const commentRouter = require('./comment');

router.use('/users', userRouter);
router.use('/posts', postingRouter);
router.use('/comment', commentRouter);
router.use('/skills', stackRouter);

module.exports = router;
