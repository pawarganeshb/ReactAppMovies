import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./search";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    <Link to="/">🎥 MOVIES4U</Link>
                </h1>

                {/* Hamburger Menu for Small Screens */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white sm:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12" // Close
                                    : "M4 6h16M4 12h16M4 18h16" // Hamb icon
                            }
                        />
                    </svg>
                </button>

                {/* Links for Larger Screens */}
                <div className="hidden sm:flex sm:gap-6">
                    <Link
                        to="/"
                        className="hover:text-yellow-400 transition-colors duration-300"
                    >
                        Popular
                    </Link>
                    <Link
                        to="/top-rated"
                        className="hover:text-yellow-400 transition-colors duration-300"
                    >
                        Top Rated
                    </Link>
                    <Link
                        to="/upcoming"
                        className="hover:text-yellow-400 transition-colors duration-300"
                    >
                        Upcoming
                    </Link>
                </div>

                {/* Search Component */}
                <div className="hidden sm:block">
                    <Search />
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="flex flex-col gap-4 p-4 bg-gray-800 sm:hidden">
                    <Link
                        to="/"
                        className="hover:text-yellow-400 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Popular
                    </Link>
                    <Link
                        to="/top-rated"
                        className="hover:text-yellow-400 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Top Rated
                    </Link>
                    <Link
                        to="/upcoming"
                        className="hover:text-yellow-400 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Upcoming
                    </Link>
                    <Search />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
