const validateRegister = (data) => {
  const errors = [];
  if (!data.fullName) errors.push("Full name is required");
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.push("Valid email is required");
  if (!data.password || data.password.length < 6) errors.push("Password must be at least 6 characters");
  if (!data.role) errors.push("Role is required");
  return errors;
};

module.exports = { validateRegister };
