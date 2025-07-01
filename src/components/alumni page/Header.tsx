
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="absolute top-0 left-2 right-6 z-50 p-2 lg:p-6 mx-12 my-12">
            <div className="flex justify-between items-center">
                <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full transition-transform duration-200 hover:scale-110 w-11 h-11">
                    <Menu className="!h-7 !w-7" />
                </Button>

                <Button
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-400 font-medium px-6 rounded-2xl"
                >
                    Join Today
                </Button>
            </div>
        </header>
    );
};

export default Header;
