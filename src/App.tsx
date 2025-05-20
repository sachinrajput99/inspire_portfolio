import React, { useEffect, useState } from "react";
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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <main className="bg-white dark:bg-black transition-colors flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto relative">

        <nav className="flex justify-between items-center z-50 bg-white dark:bg-gray-900 shadow-lg rounded-full px-4 sm:px-6 md:px-6 py-3 w-full max-w-4xl md:w-[60%] border border-gray-300 dark:border-gray-700 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white select-none"
          >
            Inspire
          </motion.div>

          {/* Desktop menu */}
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
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg px-6 py-4 flex flex-col space-y-4 md:hidden z-50"
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
              <CustomButton
                text="Contact Us"
                onClick={() => {
                  scrollToContact();
                  setIsMenuOpen(false);
                }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  toggleDarkMode();
                  setIsMenuOpen(false);
                }}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all border border-gray-400 dark:border-gray-600"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                )}
              </motion.button>
            </motion.div>
          )}
        </nav>

        <Cursor />

        <Hero />
        <Services />
        {/* choose one */}
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
    className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-none"
  >
    {children}
  </motion.a>
);

export default App;
