import api from './axios';

export const userApi = {
  updateProfile: async (data) => {
    const response = await api.put('/users/profile', data);
    return response.data;
  }
};
