const prisma = require('../config/prisma');

const getAllLeads = async (user) => {
  let where = {};
  if (user.role === 'COUNSELOR') {
    where = { assignedTo: user.id };
  }
  return await prisma.lead.findMany({
    where,
    include: { user: { select: { fullName: true } } },
    orderBy: { createdAt: 'desc' }
  });
};

const getLeadById = async (id, user) => {
  const lead = await prisma.lead.findUnique({
    where: { id: parseInt(id) },
    include: { user: { select: { fullName: true } } }
  });
  if (!lead) throw new Error("Lead not found");
  if (user.role === 'COUNSELOR' && lead.assignedTo !== user.id) {
    throw new Error("Not authorized to view this lead");
  }
  return lead;
};

const createLead = async (data, user) => {
  return await prisma.lead.create({
    data: {
      ...data,
      assignedTo: data.assignedTo || (user.role === 'COUNSELOR' ? user.id : null)
    }
  });
};

const updateLead = async (id, data, user) => {
  await getLeadById(id, user); 
  return await prisma.lead.update({
    where: { id: parseInt(id) },
    data
  });
};

const deleteLead = async (id, user) => {
  await getLeadById(id, user); // Check permission
  return await prisma.lead.delete({
    where: { id: parseInt(id) }
  });
};

const assignLead = async (id, counselorId, user) => {
  // Only Admin or above can assign
  if (user.role === 'COUNSELOR') throw new Error("Not authorized to assign leads");
  return await prisma.lead.update({
    where: { id: parseInt(id) },
    data: { assignedTo: parseInt(counselorId) }
  });
};

module.exports = { getAllLeads, getLeadById, createLead, updateLead, deleteLead, assignLead };
