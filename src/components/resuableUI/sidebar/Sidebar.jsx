"use client";
import { useState } from "react";
import ColorSwitcher from "./ColorSwitcher";
import PriceRange from "./PriceRange";
import { X } from "lucide-react";
import { useSidebar } from "@/context/SidebarProvider";

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    handleCategoryChange,
    handleBrandChange,
    filters,
    getBrandsData,
    getCategoriesData,
  } = useSidebar();

  const [showAllBrands, setShowAllBrands] = useState(false);

  const categories = getCategoriesData();
  const allBrands = getBrandsData();
  const displayedBrands = showAllBrands ? allBrands : allBrands.slice(0, 4);
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/30 backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
        fixed lg:relative top-0 left-0 h-full lg:h-fit w-5/9 md:w-1/4 bg-white p-2 z-50 lg:z-auto transform transition-transform duration-300 ease-in-out
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }
        overflow-y-auto
        shadow-lg lg:shadow-none
      `}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close sidebar"
          >
            <X />
          </button>
        </div>

        <div className="relative mb-6 bg-gray-100 p-6 rounded-md">
          <h3 className="font-semibold mb-4 uppercase text-sm">Hot Deals</h3>

          <ul className="space-y-4">
            {allBrands
              .filter((brand) => brand.isHot === true)
              .slice(0, 8)
              .map((brand, index) => (
                <li key={index} className="flex justify-between items-center">
                  <button
                    onClick={() => handleBrandChange?.(brand.name)}
                    className={`text-sm transition-colors ${
                      filters.brands.includes(brand.name)
                        ? "text-primary font-medium"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {brand.name}
                  </button>
                  <span
                    className={`text-sm ${
                      filters.brands.includes(brand.name)
                        ? "text-primary"
                        : "text-gray-400"
                    }`}
                  >
                    {brand.count}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        <div className="my-6 relative bg-gray-100 p-6 rounded-md">
          <PriceRange 
          />
        </div>

        <div className="my-6 relative bg-gray-100 p-6 rounded-md">
          <h3 className="uppercase font-semibold text-sm">color</h3>
          <ColorSwitcher />
        </div>

        <div className="my-6 relative bg-gray-100 p-6 rounded-md">
          <h3 className="font-semibold mb-4 uppercase text-sm">BRAND</h3>
          <ul className="space-y-3">
            {displayedBrands.map((brand, index) => (
              <li key={index} className="flex justify-between items-center">
                <button
                  onClick={() => handleBrandChange?.(brand.name)}
                  className={`text-sm transition-colors ${
                    filters.brands.includes(brand.name)
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {brand.name}
                </button>
                <span
                  className={`text-sm ${
                    filters.brands.includes(brand.name)
                      ? "text-primary"
                      : "text-gray-400"
                  }`}
                >
                  {brand.count}
                </span>
              </li>
            ))}
          </ul>

          {allBrands.length > 4 && (
            <button
              onClick={() => setShowAllBrands(!showAllBrands)}
              className="font-semibold uppercase cursor-pointer hover:bg-gray-200 rounded-md text-center text-sm bg-gray-100 w-full p-4 mt-4"
            >
              {showAllBrands ? "SHOW LESS" : "MORE"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
