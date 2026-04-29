const express = require('express');
const router = express.Router();


const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const leadRoutes = require('./leadRoutes');
const chatRoutes = require('./chatRoutes');
const followupRoutes = require('./followupRoutes');
const statsRoutes = require('./statsRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/leads', leadRoutes);
router.use('/chats', chatRoutes);
router.use('/followups', followupRoutes);
router.use('/stats', statsRoutes);

module.exports = router;
