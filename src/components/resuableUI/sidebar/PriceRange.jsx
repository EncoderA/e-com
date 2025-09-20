"use client";
import { useState } from "react";
import { Slider } from "./slider";

export default function PriceRange({
  priceRange = { min: 10, max: 1500 }
}) {
  const [value, setValue] = useState([priceRange.min, priceRange.max]);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold uppercase text-sm text-gray-800">PRICES</h3>

      <div className="text-sm text-gray-600">
        Range: ${value[0]?.toFixed(2)} - ${value[1]?.toFixed(2)}
      </div>

      <Slider
        value={value}
        onValueChange={setValue}
        min={priceRange.min}
        max={priceRange.max}
        step={1}
      />
    </div>
  );
}
