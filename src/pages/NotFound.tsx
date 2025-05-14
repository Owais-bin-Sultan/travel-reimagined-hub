
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold mt-6 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/">
            Back to Homepage
          </Link>
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
