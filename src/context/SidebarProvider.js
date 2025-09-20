"use client";
import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 1000 }
  });
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const isInitialLoad = useRef(true);
  const priceChangeTimeoutRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCategoryChange = useCallback((category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  }, []);

  const handleBrandChange = useCallback((brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  }, []);

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: { min: 0, max: 1000 }
    });
  };

  const loadProducts = (productData) => {
    setProducts(productData);
    setFilteredProducts(productData);
    isInitialLoad.current = false;
  };

  const sortProducts = useCallback((sortType) => {
    setSortBy(sortType);
    setFilteredProducts(prev => {
      const sorted = [...prev].sort((a, b) => {
        switch (sortType) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'price-low':
            return a.discountPrice - b.discountPrice;
          case 'price-high':
            return b.discountPrice - a.discountPrice;
          case 'rating':
            return b.ratingValue - a.ratingValue;
          case 'newest':
            return new Date(b.id) - new Date(a.id);
          default:
            return 0;
        }
      });
      return sorted;
    });
  }, []);


  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const getTotalPages = () => {
    return Math.ceil(filteredProducts.length / itemsPerPage);
  };

  const getBrandsData = () => {
    const brands = {};
    products.forEach((product) => {
      if (!brands[product.brand]) {
        brands[product.brand] = { name: product.brand, count: 0, isHot: false };
      }
      brands[product.brand].count++;
      if (product.isHot) {
        brands[product.brand].isHot = true;
      }
    });
    return Object.values(brands);
  };

  const getCategoriesData = () => {
    const categoryCounts = {};
    products.forEach(product => {
      categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    });

    return Object.entries(categoryCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  };

  useEffect(() => {
    if (products.length > 0 && !isInitialLoad.current) {
      let filtered = [...products];

      if (filters.categories.length > 0) {
        filtered = filtered.filter(product =>
          filters.categories.includes(product.category)
        );
      }

      if (filters.brands.length > 0) {
        filtered = filtered.filter(product =>
          filters.brands.includes(product.brand)
        );
      }

      setFilteredProducts(filtered);
      setCurrentPage(1); // Reset to first page when filtering
    }
  }, [products, filters.categories, filters.brands]);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        filters,
        products,
        filteredProducts,
        sortBy,
        currentPage,
        itemsPerPage,
        viewMode,
        selectedProductId,
        toggleSidebar,
        closeSidebar,
        openSidebar,
        handleCategoryChange,
        handleBrandChange,
        clearFilters,
        loadProducts,
        sortProducts,
        getPaginatedProducts,
        getTotalPages,
        getBrandsData,
        getCategoriesData,
        setCurrentPage,
        setItemsPerPage,
        setViewMode,
        setSelectedProductId
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};