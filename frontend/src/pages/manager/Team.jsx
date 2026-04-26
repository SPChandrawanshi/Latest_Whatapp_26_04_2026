import React from 'react';
import { ModulePage } from '../common/ModulePage';
import { Users } from 'lucide-react';

export default function Team() {
  return <ModulePage title="My Team Management" description="Track individual counselor targets and active work hours." icon={Users} />;
}
