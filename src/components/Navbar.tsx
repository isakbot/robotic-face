import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">RobotFace</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Labs
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="ml-2">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};