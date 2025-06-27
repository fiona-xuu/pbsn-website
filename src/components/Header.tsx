
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </Button>
        
        <Button 
          variant="secondary" 
          className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-6"
        >
          Join Today
        </Button>
      </div>
    </header>
  );
};

export default Header;
