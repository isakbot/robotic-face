import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Box, Sparkles, Clock, DollarSign } from "lucide-react";

const listings = [
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
    <section className="py-16 bg-[#fff]">
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
            <Card key={listing.company} className="bg-[#f1f1f1] border-[#eee] hover:border-[#222222] transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-[#222222]" />
                    <span className="text-sm font-normal text-[#222222]">IP Protected</span>
                  </div>
                  <listing.icon className="h-5 w-5 text-[#333333]" />
                </div>
                <div className="mt-4">
                  <CardTitle className="text-lg font-normal text-[#222222]">{listing.title}</CardTitle>
                  <div className="text-sm text-[#333333] mt-1">{listing.company}</div>
                </div>
                <CardDescription className="mt-2 text-[#333333]">
                  {listing.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-[#333333]">Requirements:</h4>
                    <ul className="mt-2 text-sm text-[#333333] space-y-1">
                      {listing.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#222222] rounded-full mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-[#333333]">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {listing.budget}
                    </div>
                    <div className="flex items-center text-[#333333]">
                      <Clock className="h-4 w-4 mr-1" />
                      {listing.deadline}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#eee]">
                    {listing.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[#f1f0fb] text-[#222222] hover:bg-[#eee]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};