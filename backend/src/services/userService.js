const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');

const updateProfile = async (data, user) => {
  const updateData = { ...data };
  
  // If changing password, it's safer to have a separate service, but for now:
  if (updateData.newPassword) {
    const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
    const isMatch = await bcrypt.compare(updateData.currentPassword, dbUser.password);
    if (!isMatch) throw new Error("Current password incorrect");
    
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.newPassword, salt);
    delete updateData.currentPassword;
    delete updateData.newPassword;
  }

  return await prisma.user.update({
    where: { id: user.id },
    data: updateData,
    select: { id: true, fullName: true, email: true, phone: true, role: true }
  });
};

const getAllUsers = async (user) => {
  if (user.role === 'SUPER_ADMIN') {
    return await prisma.user.findMany({ select: { id: true, fullName: true, email: true, role: true, phone: true, isActive: true } });
  } else if (user.role === 'ADMIN') {
    return await prisma.user.findMany({ 
      where: { role: { in: ['MANAGER', 'COUNSELOR'] } },
      select: { id: true, fullName: true, email: true, role: true, phone: true, isActive: true } 
    });
  } else {
    throw new Error('Not authorized to view users');
  }
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: parseInt(id) },
    select: { id: true, fullName: true, email: true, role: true, phone: true, isActive: true }
  });
};

const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data,
    select: { id: true, fullName: true, email: true, role: true, phone: true, isActive: true }
  });
};

const updateStatus = async (id, isActive) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data: { isActive },
    select: { id: true, fullName: true, email: true, role: true, phone: true, isActive: true }
  });
};

module.exports = { updateProfile, getAllUsers, getUserById, updateUser, updateStatus };
