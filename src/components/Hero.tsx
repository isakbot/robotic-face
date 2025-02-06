import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-[#FDE1D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="text-center">
          <h1 className="text-3xl font-normal text-[#222222] sm:text-4xl">
            Fine-tuning on Demand
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-[#333333] sm:text-lg">
            We enable brand-specific and community-driven apps for autonomous robots through our marketplace.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-[#222222] text-[#FDE1D3] hover:bg-[#333333]">
              Start
            </Button>
            <Button variant="outline" className="border-[#222222] text-[#222222] hover:bg-[#F1F0FB]">
              Browse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};