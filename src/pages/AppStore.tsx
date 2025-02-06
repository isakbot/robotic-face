import { Navbar } from "@/components/Navbar";
import { AppStoreListings } from "@/components/AppStoreListings";
import { SearchBar } from "@/components/SearchBar";

const AppStore = () => {
  return (
    <div className="min-h-screen bg-[#FDE1D3]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-normal text-[#222222] mb-6">Robot App Store</h1>
        <SearchBar />
        <AppStoreListings />
      </div>
    </div>
  );
};

export default AppStore;