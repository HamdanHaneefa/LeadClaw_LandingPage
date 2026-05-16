'use client';

import { useState } from 'react';
import {
  Users,
  Calendar,
  Bell,
  Settings,
  CheckSquare,
  MessageSquare,
  LayoutDashboard,
  Zap,
  Bot,
  TrendingUp,
  Activity,
  ChevronRight
} from 'lucide-react';

const ProductionPreview = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Static demo data
  const stats = {
    total: 1245,
    qualified: 48,
    booked: 156,
    followup: 12
  };

  const funnelStages = [
    { label: 'New (845)', width: 68, color: '#6366f1' },
    { label: 'Qual (48)', width: 19, color: '#f59e0b' },
    { label: 'Booked (156)', width: 13, color: '#10b981' }
  ];

  const recentLeads = [
    { name: 'Sarah Jenkins', stage: 'QUALIFIED', time: '2:34 PM', quality: 'HOT' },
    { name: 'Mike Chen', stage: 'NEW', time: '2:12 PM', 