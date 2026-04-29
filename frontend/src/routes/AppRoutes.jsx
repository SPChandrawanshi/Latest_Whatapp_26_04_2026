import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Login } from '../pages/auth/Login';
import { Signup } from '../pages/auth/Signup';
import { RoleLayout } from '../layouts/RoleLayout';
import { ROLES } from '../config/constants';
// --- Direct Imports for Smooth Performance ---
import SuperDashboard from '../pages/superadmin/Dashboard';
import SuperAdmins from '../pages/superadmin/Admins';
import SuperManagers from '../pages/superadmin/Managers';
import SuperCounselors from '../pages/superadmin/Counselors';
import SuperReports from '../pages/superadmin/Reports';
import SuperBilling from '../pages/superadmin/Billing';
import SuperSettings from '../pages/superadmin/Settings';

import AdminDashboard from '../pages/admin/Dashboard';
import AdminCustomers from '../pages/admin/Customers';
import AdminAssign from '../pages/admin/AssignCustomers';
import AdminReports from '../pages/admin/Reports';
import AdminSettings from '../pages/admin/Settings';

import CounselorFollowups from '../pages/counselor/FollowUps';
import CounselorDocs from '../pages/counselor/Documents';
import CounselorSettings from '../pages/counselor/Settings';

import { UnifiedInbox } from '../components/social/UnifiedInbox';
import WhatsAppPage from '../pages/admin/WhatsAppPage';
import FacebookPage from '../pages/admin/FacebookPage';
import InstagramPage from '../pages/admin/InstagramPage';
import YouTubePage from '../pages/admin/YouTubePage';
import Pricing from '../pages/admin/Pricing';
import { CustomerChat } from '../pages/auth/CustomerChat';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/customer-chat" element={<CustomerChat />} />
      
      {/* Super Admin Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.SUPER_ADMIN]} />}>
        <Route path="/superadmin/dashboard" element={<SuperDashboard />} />
        <Route path="/superadmin/admins" element={<SuperAdmins />} />
        <Route path="/superadmin/managers" element={<SuperManagers />} />
        <Route path="/superadmin/counselors" element={<SuperCounselors />} />
        <Route path="/superadmin/chats" element={<UnifiedInbox />} />
        <Route path="/superadmin/reports" element={<SuperReports />} />
        <Route path="/superadmin/billing" element={<SuperBilling />} />
        <Route path="/superadmin/settings" element={<SuperSettings />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/assign" element={<AdminAssign />} />
        <Route path="/admin/chats" element={<UnifiedInbox />} />
        <Route path="/admin/whatsapp" element={<WhatsAppPage />} />
        <Route path="/admin/facebook" element={<FacebookPage />} />
        <Route path="/admin/instagram" element={<InstagramPage />} />
        <Route path="/admin/youtube" element={<YouTubePage />} />
        <Route path="/admin/pricing" element={<Pricing />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      {/* Counselor Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.COUNSELOR]} />}>
        <Route path="/counselor/dashboard" element={<AdminDashboard />} />
        <Route path="/counselor/customers" element={<AdminCustomers />} />
        <Route path="/counselor/chats" element={<UnifiedInbox />} />
        <Route path="/counselor/followups" element={<CounselorFollowups />} />
        <Route path="/counselor/documents" element={<CounselorDocs />} />
        <Route path="/counselor/settings" element={<CounselorSettings />} />
      </Route>

      {/* Manager Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.MANAGER]} />}>
        <Route path="/manager/dashboard" element={<AdminDashboard />} />
        <Route path="/manager/customers" element={<AdminCustomers />} />
        <Route path="/manager/chats" element={<UnifiedInbox />} />
        <Route path="/manager/reports" element={<AdminReports />} />
        <Route path="/manager/settings" element={<AdminSettings />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
