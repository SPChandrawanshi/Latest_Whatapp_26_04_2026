const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);

router.get('/', chatController.getChats);
router.get('/:id/messages', chatController.getMessages);
router.post('/:id/messages', chatController.sendMessage);

module.exports = router;
