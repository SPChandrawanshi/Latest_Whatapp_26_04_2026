import api from './axios';

export const leadApi = {
  getLeads: async () => {
    const response = await api.get('/leads');
    return response.data;
  },
  createLead: async (data) => {
    const response = await api.post('/leads', data);
    return response.data;
  },
  updateLead: async (id, data) => {
    const response = await api.put(`/leads/${id}`, data);
    return response.data;
  },
  deleteLead: async (id) => {
    const response = await api.delete(`/leads/${id}`);
    return response.data;
  },
  assignLead: async (id, counselorId) => {
    const response = await api.patch(`/leads/${id}/assign`, { counselorId });
    return response.data;
  }
};
