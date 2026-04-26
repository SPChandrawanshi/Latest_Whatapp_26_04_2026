import React from 'react';
import { ModulePage } from '../common/ModulePage';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return <ModulePage title="Profile Settings" description="Manage your personal preferences and notification settings." icon={Settings} />;
}
