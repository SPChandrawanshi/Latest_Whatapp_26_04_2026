const chatService = require('../services/chatService');

exports.getChats = async (req, res, next) => {
  try {
    const chats = await chatService.getAllChats(req.user);
    res.status(200).json({ success: true, data: chats });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await chatService.getChatMessages(req.params.id, req.user);
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.sendMessage = async (req, res, next) => {
  try {
    const { content, sender } = req.body;
    const message = await chatService.sendMessage(req.params.id, content, sender || 'agent', req.user);
    res.status(201).json({ success: true, data: message });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
