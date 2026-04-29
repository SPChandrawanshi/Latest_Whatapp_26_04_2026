const followupService = require('../services/followupService');

exports.getFollowups = async (req, res, next) => {
  try {
    const followups = await followupService.getAllFollowups(req.user);
    res.status(200).json({ success: true, data: followups });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.createFollowup = async (req, res, next) => {
  try {
    const followup = await followupService.createFollowup(req.body, req.user);
    res.status(201).json({ success: true, data: followup });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const followup = await followupService.updateFollowupStatus(req.params.id, req.body.status, req.user);
    res.status(200).json({ success: true, data: followup });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
