import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Hero = () => {
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

  return (
    <div>
      <section className="relative w-full h-screen flex bg-white dark:bg-black text-black dark:text-white transition-colors">
        <div className="flex flex-col justify-center items-center w-full sm:w-3/4 ">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: -350 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="text-sm px-4 py-1 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-white rounded-full inline-block">
                ⬤ Software Agency
              </p>
              <h1 className="text-6xl font-bold mt-4">
                We Create Digital{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  Experiences
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -350 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="mt-4  p-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                Transforming ideas into exceptional digital solutions through innovative web development, mobile apps, and strategic SEO services.
              </p>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex  flex-row-reverse gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white dark:text-white rounded-full font-medium shadow-lg transition"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-700 dark:bg-gray-400 text-white dark:text-white rounded-full font-medium shadow-lg transition"
            >
              View Our Work
            </motion.button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="sm:flex flex-col justify-center hidden items-center gap-10 space-y-6">
          {[
            { text: "Working with him was a game changer!", author: "pranavnb" },
            { text: "We increased our conversions by 200%", author: "vijaynb" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: index % 2 === 0 ? -20 : 20 }}
              animate={{ y: index % 2 === 0 ? 20 : -20 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md w-60"
            >
              <p className="text-sm">"{testimonial.text}"</p>
              <p className="text-right text-gray-600 dark:text-gray-300">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
