"use client";
import React, { useEffect } from 'react';
import { useSidebar } from '@/context/SidebarProvider';
import ProductsHeader from './ProductsHeader';
import ProductsGrid from './ProductsGrid';
import Pagination from './Pagination';
import productData from '@/data/data.json';

const Products = () => {
  const {
    loadProducts,
    filteredProducts,
    sortBy,
    currentPage,
    itemsPerPage,
    viewMode,
    selectedProductId,
    sortProducts,
    setCurrentPage,
    setItemsPerPage,
    setViewMode,
    setSelectedProductId,
    getPaginatedProducts,
    getTotalPages
  } = useSidebar();

  useEffect(() => {
    loadProducts(productData);
  }, [loadProducts]);

  const handleSortChange = (newSortBy) => {
    sortProducts(newSortBy);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); 
  };

  const handleViewModeChange = (newViewMode) => {
    setViewMode(newViewMode);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  const paginatedProducts = getPaginatedProducts();
  const totalPages = getTotalPages();

  return (
    <div className="w-full bg-white">
      <ProductsHeader
        totalItems={filteredProducts.length}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />

      <ProductsGrid
        products={paginatedProducts}
        selectedProductId={selectedProductId}
        onProductSelect={handleProductSelect}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;