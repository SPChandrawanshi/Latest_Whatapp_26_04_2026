const prisma = require('../config/prisma');

const getAllFollowups = async (user) => {
  let where = {};
  if (user.role === 'COUNSELOR') {
    where = { userId: user.id };
  }
  return await prisma.followUp.findMany({
    where,
    include: { lead: true },
    orderBy: { scheduledAt: 'asc' }
  });
};

const createFollowup = async (data, user) => {
  return await prisma.followUp.create({
    data: {
      ...data,
      userId: data.userId || user.id
    }
  });
};

const updateFollowupStatus = async (id, status, user) => {
  return await prisma.followUp.update({
    where: { id: parseInt(id) },
    data: { status }
  });
};

module.exports = { getAllFollowups, createFollowup, updateFollowupStatus };
