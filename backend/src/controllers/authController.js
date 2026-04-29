const authService = require('../services/authService');
const { validateRegister } = require('../validations/authValidation');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: 'Email and password required' });

    const data = await authService.loginUser(email, password);
    
    let redirectPath = '/counselor/dashboard';
    if(data.user.role === 'SUPER_ADMIN') redirectPath = '/superadmin/dashboard';
    if(data.user.role === 'ADMIN') redirectPath = '/admin/dashboard';
    if(data.user.role === 'MANAGER') redirectPath = '/manager/dashboard';

    res.status(200).json({ success: true, message: 'Login successful', data: { ...data, redirectPath } });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.register = async (req, res, next) => {
  try {
    const errors = validateRegister(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, message: errors.join(', ') });

    const user = await authService.registerUser(req.body);
    res.status(201).json({ success: true, message: 'User created successfully', data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, message: 'Profile fetched', data: req.user });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};
