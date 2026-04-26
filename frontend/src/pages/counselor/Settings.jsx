import React from 'react';
import { ModulePage } from '../common/ModulePage';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return <ModulePage title="My Preferences" description="Update your notification alerts and daily work preferences." icon={Settings} />;
}
