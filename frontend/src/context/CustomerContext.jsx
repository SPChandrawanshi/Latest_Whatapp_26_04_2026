import React, { createContext, useContext, useState, useEffect } from 'react';
import { leadApi } from '../api/leadApi';
import { useAuth } from './AuthContext';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [activeCustomers, setActiveCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [globalMessages, setGlobalMessages] = useState({});
  const { user } = useAuth(); 

  const fetchLeads = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const res = await leadApi.getLeads();
      if (res.success) {
        const formatted = res.data.map(lead => ({
          id: lead.id,
          name: lead.name,
          email: lead.email || '',
          phone: lead.phone,
          status: lead.status,
          source: lead.source,
          assigned: lead.user ? lead.user.fullName : 'Unassigned',
          createdAt: lead.createdAt
        }));
        setActiveCustomers(formatted);
      }
    } catch (e) {
      console.error("Failed to fetch leads", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [user]);

  const addRegistration = async (cust) => {
    try {
      const res = await leadApi.createLead({
        name: cust.name,
        email: cust.email,
        phone: cust.phone,
        source: cust.source || 'Direct',
        status: 'New'
      });
      if (res.success) fetchLeads();
      return res;
    } catch(e) {
      console.error(e);
      throw e;
    }
  };

  const updateLeadStatus = async (id, status) => {
    try {
      const res = await leadApi.updateLead(id, { status });
      if (res.success) fetchLeads();
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const sendMessage = (chatId, text, sender) => {
    const newMsg = { text, sender, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setGlobalMessages(prev => {
      const updated = { ...prev, [chatId]: [...(prev[chatId] || []), newMsg] };
      return updated;
    });
  };

  return (
    <CustomerContext.Provider value={{ 
      activeCustomers, 
      addRegistration, 
      updateLeadStatus, 
      fetchLeads, 
      loading, 
      globalMessages, 
      sendMessage 
    }}>
      {children}
    </CustomerContext.Provider>
  );
}

export const useCustomers = () => useContext(CustomerContext);
