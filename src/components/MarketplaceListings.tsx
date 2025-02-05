import { Sparkles, Box } from "lucide-react";
import { MarketplaceCard } from "./MarketplaceCard";
import type { MarketplaceListing } from "@/types/marketplace";

const listings: MarketplaceListing[] = [
  {
    company: "Disney Animation",
    title: "Character Movement Dataset",
    description: "Animation data for robot movement patterns",
    requirements: [
      "Animation conversion",
      "Character movement",
      "IP protection"
    ],
    budget: "$50,000 - $150,000",
    deadline: "3 months",
    tags: ["Animation", "Motion", "Character"],
    icon: Sparkles,
  },
  {
    company: "Nike Innovation",
    title: "Athletic Movement Analysis",
    description: "Athlete performance data for robotic testing",
    requirements: [
      "Sports biomechanics",
      "Sensor fusion",
      "Real-time processing"
    ],
    budget: "$75,000 - $200,000",
    deadline: "6 months",
    tags: ["Sports", "Biomechanics", "Sensors"],
    icon: Box,
  },
  {
    company: "IKEA Product",
    title: "Assembly Dataset",
    description: "Furniture assembly data for automation",
    requirements: [
      "Assembly planning",
      "3D vision",
      "Manufacturing"
    ],
    budget: "$100,000 - $250,000",
    deadline: "9 months",
    tags: ["Assembly", "Vision", "Manufacturing"],
    icon: Box,
  }
];

export const MarketplaceListings = () => {
  return (
    <section className="py-16 bg-[#FDE1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal text-[#222222]">
            Market Opportunities
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-[#333333]">
            Current data processing and robotics development needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <MarketplaceCard key={listing.company} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};