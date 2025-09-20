import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";

const ProductCard = ({ product, isSelected = false }) => {
  const [imageError, setImageError] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IoStarSharp key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <IoStarSharp
          key="half"
          className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IoStarSharp key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div
      className={`bg-white rounded-lg cursor-pointer shadow-xs  border-2 transition-all duration-200 hover:shadow-xs ${
        isSelected ? "border-pink-500" : "border-gray-100 hover:border-gray-200"
      }`}
    >
      <div className="relative p-0">
        {product.isHot && (
          <div className="absolute top-0 left-0 z-10 p-0.5">
            <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
              HOT
            </span>
          </div>
        )}

        <div className="aspect-[8/7] bg-gray-50 rounded-lg overflow-hidden">
          {imageError ? (
            <div className="flex items-center justify-center h-full text-gray-500 text-center">
              Image not found
            </div>
          ) : (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </div>

      <div className="p-3 pt-1.5 flex flex-col items-center">
        <h3 className="font-semibold text-[#223263] text-sm mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.ratingValue)}
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${product.discountPrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-red-500 font-semibold">
                {product.discountPercent}% Off
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
