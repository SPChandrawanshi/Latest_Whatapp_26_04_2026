const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);
router.get('/dashboard', statsController.getStats);

module.exports = router;
