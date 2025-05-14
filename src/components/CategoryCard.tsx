
import React from 'react';

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md hover-scale ${className}`}>
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default CategoryCard;
