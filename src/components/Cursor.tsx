import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="fixed w-12 h-12 border border-black dark:border-white rounded-full pointer-events-none"
        animate={{ x: position.x - 24, y: position.y - 24 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{ zIndex: 100 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed w-4 h-4 bg-black dark:bg-white rounded-full pointer-events-none"
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ zIndex: 100 }}
      />
    </>
  );
};

export default Cursor;
