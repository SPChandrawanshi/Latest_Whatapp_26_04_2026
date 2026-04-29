import api from './axios';

export const chatApi = {
  getChats: async () => {
    const response = await api.get('/chats');
    return response.data;
  },
  getMessages: async (chatId) => {
    const response = await api.get(`/chats/${chatId}/messages`);
    return response.data;
  },
  sendMessage: async (chatId, content, sender = 'agent') => {
    const response = await api.post(`/chats/${chatId}/messages`, { content, sender });
    return response.data;
  }
};
