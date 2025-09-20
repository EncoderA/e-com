import React from 'react';
const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-xs border-2 border-gray-100">
      <div className="relative p-0">
        <div className="absolute top-0 left-0 z-10 p-0.5">
          <div className="h-6 w-12 bg-gray-300 animate-pulse rounded" />
        </div>
        <div className="aspect-[8/7] bg-gray-50 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gray-300 animate-pulse rounded" />
        </div>
      </div>
      <div className="p-3 pt-1.5 flex flex-col items-center">
        
        <div className="h-4 w-3/4 mb-1.5 bg-gray-300 animate-pulse rounded" />
        
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 animate-pulse rounded" />
          ))}
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-16 bg-gray-300 animate-pulse rounded" />
            <div className="h-4 w-12 bg-gray-300 animate-pulse rounded" />
            <div className="h-4 w-16 bg-gray-300 animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;