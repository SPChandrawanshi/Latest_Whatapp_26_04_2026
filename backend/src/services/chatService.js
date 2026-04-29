const prisma = require('../config/prisma');

const getAllChats = async (user) => {
  let leadWhere = {};
  if (user.role === 'COUNSELOR') {
    leadWhere = { assignedTo: user.id };
  }
  return await prisma.chat.findMany({
    where: { lead: leadWhere },
    include: { 
      lead: { select: { name: true, phone: true } },
      messages: { orderBy: { createdAt: 'desc' }, take: 1 } 
    },
    orderBy: { updatedAt: 'desc' }
  });
};

const getChatMessages = async (chatId, user) => {
  return await prisma.message.findMany({
    where: { chatId: parseInt(chatId) },
    orderBy: { createdAt: 'asc' }
  });
};

const sendMessage = async (chatId, content, sender, user) => {
  return await prisma.message.create({
    data: {
      chatId: parseInt(chatId),
      content,
      sender
    }
  });
};

module.exports = { getAllChats, getChatMessages, sendMessage };
