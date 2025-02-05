import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-[#fff] border-b border-[#eee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-normal text-[#222222]">RobotFace</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-[#222222] text-[#222222] inline-flex items-center px-1 pt-1 border-b-2 text-sm"
              >
                Market
              </a>
              <a
                href="#"
                className="border-transparent text-[#333333] hover:text-[#222222] hover:border-[#222222] inline-flex items-center px-1 pt-1 border-b-2 text-sm"
              >
                Labs
              </a>
              <a
                href="#"
                className="border-transparent text-[#333333] hover:text-[#222222] hover:border-[#222222] inline-flex items-center px-1 pt-1 border-b-2 text-sm"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 text-[#333333] hover:text-[#222222]">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="ml-2 bg-[#222222] hover:bg-[#333333] text-[#f1f1f1]">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};