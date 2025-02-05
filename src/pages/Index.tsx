import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedLabs } from "@/components/FeaturedLabs";
import { MarketplaceListings } from "@/components/MarketplaceListings";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <MarketplaceListings />
      <FeaturedLabs />
    </div>
  );
};

export default Index;