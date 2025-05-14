
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  type: string;
  features?: string[];
  className?: string;
  discount?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  image, 
  name, 
  location, 
  rating, 
  reviews, 
  price, 
  type,
  features = [],
  className = "",
  discount
}) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md hover-scale ${className}`}>
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {discount && (
          <Badge className="absolute top-3 right-3 bg-secondary text-white">
            {discount}% OFF
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <div className="flex items-center gap-1 bg-blue-500 text-white text-sm font-medium rounded px-2 py-1">
            <span>{rating}</span>
            <Star className="h-3 w-3 fill-current" />
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold text-lg">${price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
          <div className="text-gray-500 text-sm">
            {reviews} reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
