const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');

router.use(protect);

router.get('/', userController.getUsers);
router.put('/profile', userController.updateProfile);
router.get('/:id', userController.getUser);

// Only Super Admin & Admin can update or change status
router.put('/:id', authorizeRoles('SUPER_ADMIN', 'ADMIN'), userController.updateUser);
router.patch('/:id/status', authorizeRoles('SUPER_ADMIN', 'ADMIN'), userController.updateStatus);

module.exports = router;
