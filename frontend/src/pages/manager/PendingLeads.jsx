import React from 'react';
import { ModulePage } from '../common/ModulePage';
import { UserSquare2 } from 'lucide-react';

export default function PendingLeads() {
  return <ModulePage title="Pending Queue" description="Identify and re-route leads that have been inactive for over 24 hours." icon={UserSquare2} />;
}
