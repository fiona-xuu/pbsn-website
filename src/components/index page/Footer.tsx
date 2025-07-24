import { Link } from "react-router-dom";
import pbsnlogo from "@/assets/pbsn-logo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#06162c] pt-20 pb-16 flex items-end justify-center rounded-t-[5rem]">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-8">
                {/* Logo */}
                <div className="flex items-center mb-8 md:mb-0 ml-8">
                    <img src={pbsnlogo} alt="PBSN Logo" className="h-14 w-auto" />
                </div>
                {/* Navigation */}
                <nav className="flex flex-wrap gap-20 items-center justify-center text-white font-semibold text-2xl tracking-wider">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/alumni" className="hover:text-gray-400">Alumni</Link>
                    <Link to="/events" className="hover:text-gray-400">Events</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                </nav>
                {/* Socials */}
                <div className="flex gap-8 items-center mt-8 md:mt-0 mr-6">
                    <a
                        href="https://instagram.com/pbsnuwo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-white hover:text-gray-400 text-3xl transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://facebook.com/pbsnuwo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-white hover:text-gray-400 text-3xl transition"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://linkedin.com/company/pbsn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-white hover:text-gray-400 text-3xl transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;