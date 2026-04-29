import api from './axios';

const formatUser = (user) => {
  if (!user || !user.role) return user;
  return {
    ...user,
    role: user.role.toLowerCase().replace('_', '')
  };
};

export const authApi = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data?.data?.user) {
      response.data.data.user = formatUser(response.data.data.user);
    }
    return response.data;
  },
  getProfile: async () => {
    const response = await api.get('/auth/me');
    if (response.data?.data) {
      response.data.data = formatUser(response.data.data);
    }
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};
