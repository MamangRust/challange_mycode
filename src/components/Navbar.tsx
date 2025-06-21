import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      isActive(path)
        ? "text-gray-900 dark:text-gray-100"
        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
    }`;

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:border-gray-800 dark:bg-gray-900/80 transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-serif font-semibold text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-blue-300 transition-colors"
          >
            Challenge My Code
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className={navLinkClass("/")}>Home</Link>
              <Link to="/leetcode" className={navLinkClass("/leetcode")}>LeetCode</Link>
              <Link to="/hackerrank" className={navLinkClass("/hackerrank")}>HackerRank</Link>
              <Link to="/codewars" className={navLinkClass("/codewars")}>Codewars</Link>
              <Link to="/exercism" className={navLinkClass("/exercism")}>Exercism</Link>
              <Link to="/about" className={navLinkClass("/about")}>About</Link>
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <Link to="/" className={navLinkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/leetcode" className={navLinkClass("/leetcode")} onClick={() => setIsOpen(false)}>LeetCode</Link>
            <Link to="/hackerrank" className={navLinkClass("/hackerrank")} onClick={() => setIsOpen(false)}>HackerRank</Link>
            <Link to="/codewars" className={navLinkClass("/codewars")} onClick={() => setIsOpen(false)}>Codewars</Link>
            <Link to="/exercism" className={navLinkClass("/exercism")} onClick={() => setIsOpen(false)}>Exercism</Link>
            <Link to="/about" className={navLinkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
