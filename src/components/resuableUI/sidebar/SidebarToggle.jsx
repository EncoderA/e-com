import { Filter, FilterIcon, SlidersHorizontal } from 'lucide-react';
import React from 'react';
import { useSidebar } from '@/context/SidebarProvider';

const SidebarToggle = ({ className = "" }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={`lg:hidden flex items-center gap-2 p-2 rounded-md bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors duration-200 ${className}`}
    >
      <SlidersHorizontal />
      Filters
    </button>
  );
};

export default SidebarToggle;