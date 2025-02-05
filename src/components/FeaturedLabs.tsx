import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Database, Cpu } from "lucide-react";

const labs = [
  {
    name: "AutoNav Robotics Lab",
    description: "Specializing in autonomous navigation and SLAM algorithms",
    expertise: ["Navigation", "SLAM", "Sensor Fusion"],
    icon: Bot,
  },
  {
    name: "DataRobotics Research",
    description: "Expert in robotics datasets and model training",
    expertise: ["Datasets", "Training", "Validation"],
    icon: Database,
  },
  {
    name: "Neural Systems Lab",
    description: "Advanced neural networks for robotic control",
    expertise: ["Neural Networks", "Control", "Learning"],
    icon: Cpu,
  },
];

export const FeaturedLabs = () => {
  return (
    <section className="py-16 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Featured Labs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Connect with leading robotics labs and accelerate your development
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <Card key={lab.name} className="bg-[#333333] border-[#444444] hover:border-[#1EAEDB] transition-all duration-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#1EAEDB]/10 rounded-lg">
                    <lab.icon className="h-6 w-6 text-[#1EAEDB]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white">{lab.name}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-2 text-gray-300">{lab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {lab.expertise.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-[#444444] text-gray-300 hover:bg-[#555555]">
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