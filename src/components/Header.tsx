
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold text-indian-navy">
              <span className="text-indian-saffron">NewZ</span>
              <span className="text-indian-navy">App</span>
              <span className="text-indian-green ml-1">India</span>
            </div>
          </div>

          <form onSubmit={handleSearch} className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search news..."
              className="pl-10 border-gray-300 focus:border-indian-navy"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Button 
              type="submit" 
              size="sm"
              variant="ghost"
              className="absolute right-0 top-0 h-full px-3 text-indian-navy"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
