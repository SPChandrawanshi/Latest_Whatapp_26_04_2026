import React from 'react';
import { ModulePage } from '../common/ModulePage';
import { PieChart } from 'lucide-react';

export default function Reports() {
  return <ModulePage title="Admin Reports" description="Detailed performance metrics for your assigned teams." icon={PieChart} />;
}
