const express = require('express');
const doubtController = require('../controller/doubtController');
const { protect } = require('../middlewares/authchecker');

const router = express.Router();

router.post('/raisedoubt', protect, doubtController.raiseDoubt );
router.get('/alldoubts', protect, doubtController.getAllDoubts);
router.get('/pendingDoubts', protect, doubtController.getPendingDoubts);
router.post('/answeringDoubt', protect, doubtController.answerTA);
router.post('/addComment', protect, doubtController.addComment);

router.post('/assigningDoubt', protect, doubtController.assignDoubttoTA);
router.get('/:doutbtId', doubtController.getDoubt);
module.exports = router;    