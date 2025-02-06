import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path ? "border-[#222222] text-[#222222]" : "border-transparent text-[#333333] hover:text-[#222222] hover:border-[#222222]";
  };

  return (
    <nav className="bg-[#FDE1D3] border-b border-[#eee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-normal text-[#222222]">RobotFace</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${isActiveRoute("/")} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-mono`}
              >
                Market
              </Link>
              <Link
                to="#"
                className="border-transparent text-[#333333] hover:text-[#222222] hover:border-[#222222] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-mono"
              >
                Labs
              </Link>
              <Link
                to="#"
                className="border-transparent text-[#333333] hover:text-[#222222] hover:border-[#222222] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-mono"
              >
                Projects
              </Link>
              <Link
                to="/enterprise-guide"
                className={`${isActiveRoute("/enterprise-guide")} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-mono`}
              >
                Enterprise Guide
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 text-[#333333] hover:text-[#222222]">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="ml-2 bg-[#222222] hover:bg-[#333333] text-[#FDE1D3] font-mono">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};