import { AppCard } from "./AppCard";
import type { AppListing } from "@/types/appstore";

const apps: AppListing[] = [
  {
    id: "evermore-animation",
    name: "Evermore Animation Engine",
    developer: "Miraculous Mechanics",
    description: "Bring your favorite characters to life with Evermore! This app utilizes cutting-edge animation technology to imbue your humanoid robot with the mannerisms, expressions, and movements of iconic figures. Design custom performances, recreate scenes from beloved stories, or let your robot improvise interactions with a unique personality.",
    dependencies: "Requires a robot with advanced dexterity, a wide range of motion, and facial expression capabilities. Optimal performance with robots equipped with high-resolution cameras and microphones for environmental awareness and interaction.",
    compatibility: [
      "Boston Dynamics (Atlas)",
      "Agility Robotics (Digit)",
      "Figure AI (Figure 02)",
      "Unitree Robotics (H1)"
    ],
    category: "Animation",
    rating: 4.8,
    downloads: 1250,
  },
  {
    id: "yoga-instructor",
    name: "Yoga Instructor",
    developer: "Zen Robotics",
    description: "This app equips your humanoid robot with the knowledge and skills to guide you through various yoga poses and routines. It provides step-by-step instructions, adjusts to your skill level, and offers modifications for different needs and limitations.",
    dependencies: "Requires a robot with a wide range of motion, balance, and the ability to provide clear instructions.",
    compatibility: [
      "Boston Dynamics (Atlas)",
      "LimX Dynamics (CL-1)",
      "Fourier Intelligence (GR-2)"
    ],
    category: "Fitness",
    rating: 4.6,
    downloads: 875,
  }
];

export const AppStoreListings = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};