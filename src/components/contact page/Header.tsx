import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="absolute top-0 left-2 right-6 z-50 p-2 lg:p-6 mx-12 my-12">
            <div className="flex justify-between items-center">
                {/* Navigation Links */}
                <nav className="flex gap-20 items-center pl-10 text-large">
                    <Link to="/" className="text-white font-medium hover:text-gray-300">Home</Link>
                    <Link to="/alumni" className="text-white font-medium hover:text-gray-300">Alumni</Link>
                    <Link to="/events" className="text-white font-medium hover:text-gray-300">Events</Link>
                    <Link to="/contact" className="text-white font-medium hover:text-gray-300">Contact Us</Link>
                </nav>
                {/* Join Today Button */}
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
