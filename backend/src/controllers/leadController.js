const leadService = require('../services/leadService');

exports.getLeads = async (req, res, next) => {
  try {
    const leads = await leadService.getAllLeads(req.user);
    res.status(200).json({ success: true, message: 'Leads fetched', data: leads });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getLead = async (req, res, next) => {
  try {
    const lead = await leadService.getLeadById(req.params.id, req.user);
    res.status(200).json({ success: true, message: 'Lead fetched', data: lead });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

exports.createLead = async (req, res, next) => {
  try {
    const lead = await leadService.createLead(req.body, req.user);
    res.status(201).json({ success: true, message: 'Lead created', data: lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateLead = async (req, res, next) => {
  try {
    const lead = await leadService.updateLead(req.params.id, req.body, req.user);
    res.status(200).json({ success: true, message: 'Lead updated', data: lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteLead = async (req, res, next) => {
  try {
    await leadService.deleteLead(req.params.id, req.user);
    res.status(200).json({ success: true, message: 'Lead deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.assignLead = async (req, res, next) => {
  try {
    const lead = await leadService.assignLead(req.params.id, req.body.counselorId, req.user);
    res.status(200).json({ success: true, message: 'Lead assigned', data: lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
