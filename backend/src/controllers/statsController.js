const statsService = require('../services/statsService');

exports.getStats = async (req, res, next) => {
  try {
    const stats = await statsService.getDashboardStats(req.user);
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
