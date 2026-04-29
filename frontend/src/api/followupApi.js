import api from './axios';

export const followupApi = {
  getFollowups: async () => {
    const response = await api.get('/followups');
    return response.data;
  },
  createFollowup: async (data) => {
    const response = await api.post('/followups', data);
    return response.data;
  },
  updateStatus: async (id, status) => {
    const response = await api.put(`/followups/${id}/status`, { status });
    return response.data;
  }
};
