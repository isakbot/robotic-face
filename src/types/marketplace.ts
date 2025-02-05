import { LucideIcon } from "lucide-react";

export interface MarketplaceListing {
  company: string;
  title: string;
  description: string;
  requirements: string[];
  budget: string;
  deadline: string;
  tags: string[];
  icon: LucideIcon;
}