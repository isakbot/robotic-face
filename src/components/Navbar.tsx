import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-[#222222] border-b border-[#444444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#1EAEDB]">RobotFace</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-[#1EAEDB] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Labs
              </a>
              <a
                href="#"
                className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="ml-2 bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};