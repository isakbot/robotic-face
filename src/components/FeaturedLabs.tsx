import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot from "lucide-react";

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Labs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Connect with leading robotics labs and accelerate your development
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <Card key={lab.name} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <lab.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{lab.name}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-2">{lab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {lab.expertise.map((tag) => (
                    <Badge key={tag} variant="secondary">
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