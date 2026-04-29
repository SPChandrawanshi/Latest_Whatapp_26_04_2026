const express = require('express');
const router = express.Router();
const followupController = require('../controllers/followupController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);

router.get('/', followupController.getFollowups);
router.post('/', followupController.createFollowup);
router.put('/:id/status', followupController.updateStatus);

module.exports = router;
