"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsGrid = ({ products, selectedProductId, onProductSelect }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading
        ? Array.from({ length: products.length || 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProductId === product.id}
            onSelect={() => onProductSelect && onProductSelect(product.id)}
          />
        ))}
    </div>
  );
};

export default ProductsGrid;
