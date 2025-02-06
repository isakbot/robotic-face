import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";
import type { AppListing } from "@/types/appstore";

export const AppCard = ({ app }: { app: AppListing }) => {
  return (
    <Card className="bg-[#FDE1D3] border-[#eee] hover:border-[#222222] transition-all duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-[#F1F0FB] text-[#222222] hover:bg-[#eee] font-mono">
            {app.category}
          </Badge>
          <div className="flex items-center space-x-1 text-[#222222]">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-mono">{app.rating}</span>
          </div>
        </div>
        <CardTitle className="text-xl font-normal text-[#222222] mt-4">{app.name}</CardTitle>
        <div className="text-sm text-[#333333] font-mono">{app.developer}</div>
        <CardDescription className="text-[#333333] font-mono mt-2">
          {app.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-mono text-[#333333]">Dependencies:</h4>
            <p className="mt-1 text-sm text-[#333333] font-mono">{app.dependencies}</p>
          </div>
          <div>
            <h4 className="text-sm font-mono text-[#333333]">Compatible with:</h4>
            <ul className="mt-2 space-y-1">
              {app.compatibility.map((robot) => (
                <li key={robot} className="text-sm text-[#333333] font-mono flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#222222] rounded-full mr-2" />
                  {robot}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#eee]">
            <div className="text-sm text-[#333333] font-mono flex items-center">
              <Download className="h-4 w-4 mr-1" />
              {app.downloads} downloads
            </div>
            <Button className="bg-[#222222] hover:bg-[#333333] text-[#FDE1D3] font-mono">
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};