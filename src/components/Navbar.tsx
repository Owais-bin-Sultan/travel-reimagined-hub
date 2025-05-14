
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-primary font-bold text-2xl">TravelHub</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
            Stays
          </Link>
          <Link to="/" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
            Flights
          </Link>
          <Link to="/" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
            Car Rentals
          </Link>
          <Link to="/" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
            Attractions
          </Link>
          <Link to="/" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
            Airport Taxis
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium">
            List Your Property
          </Button>
          <Button variant="outline" className="hidden md:inline-flex text-sm font-medium">
            Register
          </Button>
          <Button className="text-sm font-medium">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
