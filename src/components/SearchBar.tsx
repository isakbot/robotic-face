import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-[#333333]" />
      </div>
      <Input 
        type="text"
        placeholder="Search apps..."
        className="pl-10 bg-[#F1F0FB] border-[#eee] text-[#222222] font-mono placeholder:text-[#666666]"
      />
    </div>
  );
};