import api from './axios';

export const statsApi = {
  getDashboardStats: async () => {
    const response = await api.get('/stats/dashboard');
    return response.data;
  }
};
