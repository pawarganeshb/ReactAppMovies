import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-blue">MOVIES4U</h3>
                        <p className="text-sm text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi eveniet tenetur est voluptates, culpa dolor odit, recusandae reiciendis quae impedit neque dignissimos unde suscipit. Nemo porro fugiat libero repudiandae?
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                                    Popular
                                </Link>
                            </li>
                            <li>
                                <Link to="/top-rated" className="hover:text-yellow-400 transition-colors duration-300">
                                    Top Rated
                                </Link>
                            </li>
                            <li>
                                <Link to="/upcoming" className="hover:text-yellow-400 transition-colors duration-300">
                                    Upcoming
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.508 1.492-3.891 3.777-3.891 1.093 0 2.238.194 2.238.194v2.46H15.87c-1.248 0-1.632.777-1.632 1.57v1.883h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.27 8.27 0 01-2.357.636 4.074 4.074 0 001.804-2.223 8.224 8.224 0 01-2.605.986 4.107 4.107 0 00-6.993 3.743A11.653 11.653 0 013.18 4.528a4.105 4.105 0 001.273 5.478 4.072 4.072 0 01-1.859-.508v.05a4.106 4.106 0 003.292 4.018 4.101 4.101 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.827" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6zm6.75-.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-400 pt-4">
                    <p> &copy; {new Date().getFullYear()} MOVIES4U. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
