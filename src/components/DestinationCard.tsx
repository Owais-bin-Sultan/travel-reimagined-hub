
import React from 'react';

interface DestinationCardProps {
  image: string;
  name: string;
  properties: number;
  className?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, name, properties, className = "" }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg hover-scale ${className}`}>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-xl">{name}</h3>
        <p className="text-white/90 text-sm">{properties} properties</p>
      </div>
    </div>
  );
};

export default DestinationCard;
