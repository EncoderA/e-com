import React from "react";
import { ChevronDown, Grid3X3, List } from "lucide-react";
import SidebarToggle from "./resuableUI/sidebar/SidebarToggle";
import { CgMenuGridR } from "react-icons/cg";
import { BsList } from "react-icons/bs";

const ProductsHeader = ({
  totalItems,
  sortBy,
  onSortChange,
  itemsPerPage,
  onItemsPerPageChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-md mt-4 p-2 sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
        <div className="flex items-center gap-12">
          <SidebarToggle className="sm:hidden" />
          <div className="flex items-center gap-4">
            <span className="text-gray-700 ">{totalItems} Items</span>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Show</span>
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center overflow-hidden">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-2 transition-colors ${
            viewMode === "grid"
              ? "text-primary bg-gray-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          aria-label="Grid view"
        >
          <CgMenuGridR />
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-2 transition-colors ${
            viewMode === "list"
              ? "text-primary bg-gray-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          aria-label="List view"
        >
          <BsList className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductsHeader;
