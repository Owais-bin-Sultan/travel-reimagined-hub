
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import DestinationCard from '@/components/DestinationCard';
import PropertyCard from '@/components/PropertyCard';
import CategoryCard from '@/components/CategoryCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 lg:py-32"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 41, 102, 0.7), rgba(0, 41, 102, 0.7)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80")'
        }}
      >
        <div className="container mx-auto text-center px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Perfect Stay</h1>
            <p className="text-xl text-white/90 mb-8">Search deals on hotels, homes, and much more...</p>
            
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full p-1 mb-8">
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                Stays
              </Button>
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                Flights
              </Button>
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                Car Rentals
              </Button>
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/20 hover:text-white">
                Attractions
              </Button>
            </div>
          </div>

          <SearchBar />
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Trending Destinations</h2>
          <p className="text-gray-600 mb-8">Most popular choices for travelers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DestinationCard 
              image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
              name="Paris"
              properties={843}
              className="h-64"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              name="New York"
              properties={621}
              className="h-64"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1555992828-55637f3ff29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1564&q=80" 
              name="Tokyo"
              properties={512}
              className="h-64"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              name="London"
              properties={731}
              className="h-64"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="rounded-full">
              Discover More Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Browse by Property Type</h2>
          <p className="text-gray-600 mb-8">Find the perfect place to stay</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <CategoryCard 
              icon="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              title="Hotels"
              description="835,271 hotels"
            />
            <CategoryCard 
              icon="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80" 
              title="Apartments"
              description="453,122 apartments"
            />
            <CategoryCard 
              icon="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              title="Resorts"
              description="17,542 resorts"
            />
            <CategoryCard 
              icon="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
              title="Villas"
              description="28,889 villas"
            />
            <CategoryCard 
              icon="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              title="Cabins"
              description="14,235 cabins"
            />
          </div>
        </div>
      </section>
      
      {/* Deals & Promotions */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Deals & Promotions</h2>
              <p className="text-gray-600">Special offers to help you save</p>
            </div>
            <Button variant="link" className="text-primary">
              View All Deals
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard 
              image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              name="Luxury Downtown Hotel"
              location="New York, United States"
              rating={9.2}
              reviews={487}
              price={199}
              type="Hotel"
              features={["Breakfast included", "Free cancellation"]}
              discount={25}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              name="Seaview Resort & Spa"
              location="Phuket, Thailand"
              rating={8.9}
              reviews={312}
              price={149}
              type="Resort"
              features={["Ocean view", "Pool"]}
              discount={20}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              name="Modern City Apartment"
              location="Barcelona, Spain"
              rating={9.0}
              reviews={245}
              price={129}
              type="Apartment"
              features={["Kitchen", "Balcony"]}
              discount={15}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-gray-600">Handpicked properties for your next trip</p>
            </div>
            <Tabs defaultValue="all" className="mt-4 md:mt-0">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                <TabsTrigger value="apartments">Apartments</TabsTrigger>
                <TabsTrigger value="villas">Villas</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PropertyCard 
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              name="The Grand Palace"
              location="Paris, France"
              rating={9.5}
              reviews={623}
              price={389}
              type="Luxury Hotel"
              features={["Spa", "Restaurant"]}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
              name="Ocean Breeze Villa"
              location="Bali, Indonesia"
              rating={9.3}
              reviews={412}
              price={249}
              type="Villa"
              features={["Private Pool", "Beach Access"]}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80" 
              name="Urban Loft"
              location="London, UK"
              rating={9.0}
              reviews={298}
              price={179}
              type="Apartment"
              features={["City View", "Modern"]}
            />
            <PropertyCard 
              image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              name="Mountain Retreat"
              location="Swiss Alps, Switzerland"
              rating={9.7}
              reviews={356}
              price={329}
              type="Chalet"
              features={["Mountain View", "Fireplace"]}
            />
          </div>
          
          <div className="text-center mt-10">
            <Button className="rounded-full">Explore All Properties</Button>
          </div>
        </div>
      </section>
      
      {/* Mobile App Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">Download Our App</h2>
              <p className="text-white/90 text-lg mb-6">
                Book on the go with our mobile app. Get exclusive mobile-only deals and manage your trips from anywhere.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="bg-white hover:bg-white/90 text-primary">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,2h-11C3.57,2,1,4.57,1,7.5v9C1,19.43,3.57,22,6.5,22h11c2.93,0,5.5-2.57,5.5-5.5v-9C23,4.57,20.43,2,17.5,2z M12,17.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,17.5,12,17.5z M14.5,12H9.5C9.22,12,9,11.78,9,11.5v-7C9,4.22,9.22,4,9.5,4h5c0.28,0,0.5,0.22,0.5,0.5v7C15,11.78,14.78,12,14.5,12z"/>
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" className="bg-white hover:bg-white/90 text-primary">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5,3v18c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1V3c0-0.55-0.45-1-1-1H6C5.45,2,5,2.45,5,3z M12,20.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,20.5,12,20.5z M7,17h10V5H7V17z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="TravelHub Mobile App" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Travel Deals & Inspiration</h2>
            <p className="text-gray-600 mb-8">
              Sign up for our newsletter and be the first to receive special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
              />
              <Button className="h-11">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
