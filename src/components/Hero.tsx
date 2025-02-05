import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-[#222222] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1EAEDB]/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">The Marketplace for</span>
            <span className="block text-[#1EAEDB]">Robotics Innovation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with leading robotics labs for data, models, and hardware expertise.
            Accelerate your robotics development with our curated marketplace.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#1EAEDB] hover:bg-[#0FA0CE] md:py-4 md:text-lg md:px-10">
                Get Started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-[#1EAEDB] bg-transparent border-[#1EAEDB] hover:bg-[#1EAEDB]/10 md:py-4 md:text-lg md:px-10">
                Browse Labs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};