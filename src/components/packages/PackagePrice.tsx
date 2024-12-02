import React from 'react';

interface PackagePriceProps {
  price: number;
}

export function PackagePrice({ price }: PackagePriceProps) {
  return (
    <div className="text-center mb-6">
      <span className="text-3xl font-bold text-white">${price}</span>
    </div>
  );
}