import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Database, Cpu } from "lucide-react";

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

export const FeaturedLabs = () => {
  return (
    <section className="py-16 bg-[#f1f1f1]">
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
            <Card key={lab.name} className="bg-[#fff] border-[#eee] hover:border-[#222222] transition-all duration-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#f1f0fb] rounded-lg">
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
                    <Badge key={tag} variant="secondary" className="bg-[#f1f0fb] text-[#222222] hover:bg-[#eee]">
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
  );
};