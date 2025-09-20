'use client';
import { useState, useEffect } from 'react';

const colors = [
  { name: 'blue', value: '#006CFF' },
  { name: 'red', value: '#FC3E39' },
  { name: 'dark', value: '#171717' },
  { name: 'yellow', value: '#FFF600' },
  { name: 'pink', value: '#FF00B4' },
  { name: 'light', value: '#EFDFDF' },
];

export default function ColorSwitcher() {
  const [currentColor, setCurrentColor] = useState('blue');

  useEffect(() => {
    document.documentElement.setAttribute('data-primary', currentColor);
  }, [currentColor]);

  return (
    <div className="flex gap-3 py-4">

      {colors.map((color) => (
        <div
          key={color.name}
          className={`flex items-center justify-center rounded-full 
            ${currentColor === color.name ? 'ring-2 ring-secondary p-1' : 'p-1'}
          `}
        >
          <button
            onClick={() => setCurrentColor(color.name)}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        </div>
      ))}
    </div>
  );
}
