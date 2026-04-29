const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');
  if (!user.isActive) throw new Error('Account is deactivated');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
  // Remove password from response
  const { password: _, ...userWithoutPassword } = user;
  
  return { token, user: userWithoutPassword };
};

const registerUser = async (userData) => {
  const existingUser = await prisma.user.findUnique({ where: { email: userData.email } });
  if (existingUser) throw new Error('Email already in use');

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  
  const user = await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword
    }
  });

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

module.exports = { loginUser, registerUser };
