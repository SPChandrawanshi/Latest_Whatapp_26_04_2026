import React from 'react';
import { ModulePage } from '../common/ModulePage';
import { PieChart } from 'lucide-react';

export default function Reports() {
  return <ModulePage title="Analytics & Reports" description="Global insights and data visualisations for the entire platform." icon={PieChart} />;
}
