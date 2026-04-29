const prisma = require('../config/prisma');

const getDashboardStats = async (user) => {
  let leadsWhere = {};
  if (user.role === 'COUNSELOR') leadsWhere = { assignedTo: user.id };

  const totalLeads = await prisma.lead.count({ where: leadsWhere });
  const newLeads = await prisma.lead.count({ where: { ...leadsWhere, status: 'New' } });
  const convertedLeads = await prisma.lead.count({ where: { ...leadsWhere, status: 'Converted' } });
  
  let chatsWhere = {};
  if (user.role === 'COUNSELOR') chatsWhere = { lead: { assignedTo: user.id } };
  const activeChats = await prisma.chat.count({ where: chatsWhere });

  const followups = await prisma.followUp.count({ where: { userId: user.id, status: 'Pending' } });

  // For super admin, also get total users
  let totalUsers = 0;
  if (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') {
    totalUsers = await prisma.user.count();
  }

  return {
    totalLeads,
    newLeads,
    convertedLeads,
    activeChats,
    pendingFollowups: followups,
    totalUsers
  };
};

module.exports = { getDashboardStats };
