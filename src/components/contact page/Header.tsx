import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="absolute top-6 left-5 right-5 z-50 px-5 py-4 md:top-0 md:left-2 md:right-6 md:p-2 lg:p-6 md:mx-12 md:my-12">
            <div className="flex justify-between items-center">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="md:hidden -ml-2.5 flex h-11 w-11 items-center justify-center text-white" aria-label="Open menu">
                            <Menu className="h-7 w-7" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" aria-describedby={undefined} className="bg-[#06162c] text-white border-none [&>button]:text-white flex flex-col gap-8 pt-16">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <nav className="flex flex-col gap-3 text-2xl font-medium">
                            <SheetClose asChild>
                                <Link to="/" className="py-1.5 hover:text-gray-300">Home</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link to="/alumni" className="py-1.5 hover:text-gray-300">Alumni</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link to="/events" className="py-1.5 hover:text-gray-300">Events</Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link to="/contact" className="py-1.5 hover:text-gray-300">Contact Us</Link>
                            </SheetClose>
                        </nav>
                        <Button asChild variant="secondary" className="self-start bg-white text-gray-900 hover:bg-gray-400 font-medium px-6 rounded-2xl focus-visible:ring-white focus-visible:ring-offset-[#06162c]">
                            <a href="https://westernusc.store/product/pre-business-students-network/" target="_blank" rel="noopener noreferrer">Join Today</a>
                        </Button>
                    </SheetContent>
                </Sheet>
                {/* Navigation Links */}
                <nav className="hidden md:flex md:gap-10 lg:gap-20 items-center pl-10 text-large">
                    <Link to="/" className="text-white font-medium hover:text-gray-300">Home</Link>
                    <Link to="/alumni" className="text-white font-medium hover:text-gray-300">Alumni</Link>
                    <Link to="/events" className="text-white font-medium hover:text-gray-300">Events</Link>
                    <Link to="/contact" className="text-white font-medium hover:text-gray-300">Contact Us</Link>
                </nav>
                {/* Join Today Button */}
                <a
                    href="https://westernusc.store/product/pre-business-students-network/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        variant="secondary"
                        className="bg-white text-gray-900 hover:bg-gray-400 font-medium px-6 rounded-2xl"
                    >
                        Join Today
                    </Button>
                </a>
            </div>
        </header>
    );
};

export default Header;
