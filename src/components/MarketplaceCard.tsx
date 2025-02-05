import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, DollarSign } from "lucide-react";
import { MarketplaceListing } from "@/types/marketplace";

export const MarketplaceCard = ({ listing }: { listing: MarketplaceListing }) => {
  return (
    <Card className="bg-[#FDE1D3] border-[#eee] hover:border-[#222222] transition-all duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-[#222222]" />
            <span className="text-sm font-normal text-[#222222]">IP Protected</span>
          </div>
          <listing.icon className="h-5 w-5 text-[#333333]" />
        </div>
        <div className="mt-4">
          <CardTitle className="text-lg font-normal text-[#222222]">{listing.title}</CardTitle>
          <div className="text-sm text-[#333333] mt-1">{listing.company}</div>
        </div>
        <CardDescription className="mt-2 text-[#333333]">
          {listing.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm text-[#333333]">Requirements:</h4>
            <ul className="mt-2 text-sm text-[#333333] space-y-1">
              {listing.requirements.map((req, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#222222] rounded-full mr-2" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-[#333333]">
              <DollarSign className="h-4 w-4 mr-1" />
              {listing.budget}
            </div>
            <div className="flex items-center text-[#333333]">
              <Clock className="h-4 w-4 mr-1" />
              {listing.deadline}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#eee]">
            {listing.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-[#F1F0FB] text-[#222222] hover:bg-[#eee]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};