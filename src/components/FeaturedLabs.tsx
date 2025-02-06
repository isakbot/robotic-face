import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Database, Cpu, FileText } from "lucide-react";

const labs = [
  {
    name: "AutoNav Robotics Lab",
    description: "Autonomous navigation, SLAM algorithms",
    expertise: ["Navigation", "SLAM", "Sensor Fusion"],
    icon: Bot,
  },
  {
    name: "DataRobotics Research",
    description: "Robotics datasets, model training",
    expertise: ["Datasets", "Training", "Validation"],
    icon: Database,
  },
  {
    name: "Neural Systems Lab",
    description: "Neural networks for robotic control",
    expertise: ["Neural Networks", "Control", "Learning"],
    icon: Cpu,
  },
];

const enterpriseSteps = [
  {
    title: "Data Format",
    description: "Provide structured JSON with clear schema documentation",
  },
  {
    title: "Access Protocol",
    description: "Define API endpoints and authentication methods",
  },
  {
    title: "Usage Rights",
    description: "Specify data licensing and usage restrictions",
  },
];

export const FeaturedLabs = () => {
  return (
    <div className="bg-[#FDE1D3]">
      <section className="py-16 bg-[#FDE1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-normal text-[#222222]">
              Featured Labs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-[#333333]">
              Access specialized expertise
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {labs.map((lab) => (
              <Card key={lab.name} className="bg-[#FDE1D3] border-[#eee] hover:border-[#222222] transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-[#F1F0FB] rounded-lg">
                      <lab.icon className="h-5 w-5 text-[#222222]" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-normal text-[#222222]">{lab.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-2 text-[#333333]">{lab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {lab.expertise.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[#F1F0FB] text-[#222222] hover:bg-[#eee]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F1F0FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-normal text-[#222222]">
              Enterprises: Here's what you need to contribute in brief documentation to turbocharge model delivery in TLDR form
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {enterpriseSteps.map((step) => (
              <Card key={step.title} className="bg-[#FDE1D3] border-[#eee] hover:border-[#222222] transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-[#F1F0FB] rounded-lg">
                      <FileText className="h-5 w-5 text-[#222222]" />
                    </div>
                    <CardTitle className="text-lg font-normal text-[#222222]">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#333333]">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};