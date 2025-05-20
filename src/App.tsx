import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomButton from "./components/CustomButton";
import ProcessSection from "./components/ProcessSection";
import Cursor from "./components/Cursor";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Hide menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${isDarkMode ? "dark" : ""}`}
    >
      <main className="bg-white dark:bg-black transition-colors flex flex-col">
        {/* Navbar */}
        <div className="dark:bg-black bg-white flex justify-center pt-10">
          <nav className="flex   top-14 flex-row justify-between z-50 bg-white dark:bg-gray-900 shadow-lg rounded-full px-6 py-3 w-[90%] border border-gray-300 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Inspire
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#why-choose-us">Why Us</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <CustomButton text="Contact Us" onClick={scrollToContact} />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all border border-gray-400 dark:border-gray-600"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg mr-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all border border-gray-400 dark:border-gray-600"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Moon className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </motion.button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                )}
              </button>
              
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed top-28 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-6 py-4 w-[80%] flex flex-col items-start space-y-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md z-40 transition-all"
          >
            <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink href="#why-choose-us" onClick={() => setIsMenuOpen(false)}>
              Why Us
            </NavLink>
            <NavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </NavLink>
            <CustomButton text="Contact Us" onClick={scrollToContact} />
            
          </div>
        )}

        {/* Other Sections */}
        <div className="hidden md:block">
          <Cursor />
        </div>
        <Hero />
        <Services />
        <ProcessSection />
        <WorkProcess />
        <WhyChooseUs />
        <Portfolio />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {children}
  </motion.a>
);

export default App;
