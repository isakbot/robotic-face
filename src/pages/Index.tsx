import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedLabs } from "@/components/FeaturedLabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedLabs />
    </div>
  );
};

export default Index;