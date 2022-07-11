const express = require('express');
const doubtController = require('../controller/doubtController');
const { protect } = require('../middlewares/authchecker');

const router = express.Router();

router.post('/raisedoubt', protect, doubtController.raiseDoubt );
router.get('/:doutbtId', protect, doubtController.getDoubt);
module.exports = router;    