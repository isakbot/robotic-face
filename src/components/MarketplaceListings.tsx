import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Box, Sparkles, Clock, DollarSign } from "lucide-react";

const listings = [
  {
    company: "Disney Animation Studios",
    title: "Robotic Character Movement Dataset",
    description: "Seeking specialized robotics labs for processing our proprietary character animation data into robot movement patterns. Dataset includes detailed motion capture from our latest animated features.",
    requirements: [
      "Experience with animation-to-robotics conversion",
      "Strong background in character movement",
      "Proven track record in IP protection"
    ],
    budget: "$50,000 - $150,000",
    deadline: "3 months",
    tags: ["Animation", "Motion Capture", "Character Movement"],
    icon: Sparkles,
  },
  {
    company: "Nike Innovation Lab",
    title: "Athletic Movement Analysis Dataset",
    description: "Looking for partners to analyze our athlete performance data for robotic testing applications. Dataset includes high-speed camera footage and sensor data from professional athletes.",
    requirements: [
      "Sports biomechanics expertise",
      "Experience with multi-sensor fusion",
      "Real-time processing capabilities"
    ],
    budget: "$75,000 - $200,000",
    deadline: "6 months",
    tags: ["Sports Analytics", "Biomechanics", "Sensor Fusion"],
    icon: Box,
  },
  {
    company: "IKEA Product Development",
    title: "Furniture Assembly Dataset",
    description: "Seeking labs to process our furniture assembly data for robotic automation. Includes detailed 3D scans and assembly sequences for our most popular products.",
    requirements: [
      "Expertise in assembly sequence planning",
      "3D vision processing experience",
      "Demonstrated success in manufacturing automation"
    ],
    budget: "$100,000 - $250,000",
    deadline: "9 months",
    tags: ["Assembly Automation", "3D Vision", "Manufacturing"],
    icon: Box,
  }
];

export const MarketplaceListings = () => {
  return (
    <section className="py-16 bg-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Active Market Opportunities
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Browse current data processing and robotics development opportunities from leading companies
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <Card key={listing.company} className="bg-[#222222] border-[#444444] hover:border-[#1EAEDB] transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-[#1EAEDB]" />
                    <span className="text-sm font-medium text-[#1EAEDB]">IP Protected</span>
                  </div>
                  <listing.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="mt-4">
                  <CardTitle className="text-xl font-bold text-white">{listing.title}</CardTitle>
                  <div className="text-sm font-medium text-gray-400 mt-1">{listing.company}</div>
                </div>
                <CardDescription className="mt-2 text-gray-300">
                  {listing.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Requirements:</h4>
                    <ul className="mt-2 text-sm text-gray-300 space-y-1">
                      {listing.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#1EAEDB] rounded-full mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {listing.budget}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {listing.deadline}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#444444]">
                    {listing.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[#444444] text-gray-300 hover:bg-[#555555]">
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