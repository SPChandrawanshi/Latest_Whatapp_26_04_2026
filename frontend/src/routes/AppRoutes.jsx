import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Login } from '../pages/auth/Login';
import { RoleLayout } from '../layouts/RoleLayout';
import { ROLES } from '../config/constants';
import { ChatBoard } from '../pages/common/ChatBoard';

// --- Direct Imports for Smooth Performance (Removing Lazy Flicker) ---
import SuperDashboard from '../pages/superadmin/Dashboard';
import SuperAdmins from '../pages/superadmin/Admins';
import SuperManagers from '../pages/superadmin/Managers';
import SuperCounselors from '../pages/superadmin/Counselors';
import SuperReports from '../pages/superadmin/Reports';
import SuperBilling from '../pages/superadmin/Billing';
import SuperSettings from '../pages/superadmin/Settings';

import AdminDashboard from '../pages/admin/Dashboard';
import AdminTeam from '../pages/admin/Team';
import AdminLeads from '../pages/admin/Leads';
import AdminAssign from '../pages/admin/AssignLeads';
import AdminReports from '../pages/admin/Reports';
import AdminSettings from '../pages/admin/Settings';

import ManagerDashboard from '../pages/manager/Dashboard';
import ManagerTeam from '../pages/manager/Team';
import ManagerTasks from '../pages/manager/Tasks';
import ManagerPending from '../pages/manager/PendingLeads';
import ManagerPerformance from '../pages/manager/Performance';

import CounselorDashboard from '../pages/counselor/Dashboard';
import CounselorLeads from '../pages/counselor/Leads';
import CounselorFollowups from '../pages/counselor/FollowUps';
import CounselorDocs from '../pages/counselor/Documents';
import CounselorSettings from '../pages/counselor/Settings';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Super Admin Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.SUPER_ADMIN]} />}>
        <Route path="/superadmin/dashboard" element={<SuperDashboard />} />
        <Route path="/superadmin/admins" element={<SuperAdmins />} />
        <Route path="/superadmin/managers" element={<SuperManagers />} />
        <Route path="/superadmin/counselors" element={<SuperCounselors />} />
        <Route path="/superadmin/chats" element={<ChatBoard />} />
        <Route path="/superadmin/reports" element={<SuperReports />} />
        <Route path="/superadmin/billing" element={<SuperBilling />} />
        <Route path="/superadmin/settings" element={<SuperSettings />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/team" element={<AdminTeam />} />
        <Route path="/admin/leads" element={<AdminLeads />} />
        <Route path="/admin/assign" element={<AdminAssign />} />
        <Route path="/admin/chats" element={<ChatBoard />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      {/* Manager Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.MANAGER]} />}>
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/team" element={<ManagerTeam />} />
        <Route path="/manager/tasks" element={<ManagerTasks />} />
        <Route path="/manager/pending" element={<ManagerPending />} />
        <Route path="/manager/chats" element={<ChatBoard />} />
        <Route path="/manager/performance" element={<ManagerPerformance />} />
      </Route>

      {/* Counselor Routes */}
      <Route element={<RoleLayout allowedRoles={[ROLES.COUNSELOR]} />}>
        <Route path="/counselor/dashboard" element={<CounselorDashboard />} />
        <Route path="/counselor/leads" element={<CounselorLeads />} />
        <Route path="/counselor/chats" element={<ChatBoard />} />
        <Route path="/counselor/followups" element={<CounselorFollowups />} />
        <Route path="/counselor/documents" element={<CounselorDocs />} />
        <Route path="/counselor/settings" element={<CounselorSettings />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
