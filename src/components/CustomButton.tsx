import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // Sparkle Icon for Effect

const CustomButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-black border border-gray-700  bg-white dark:text-white  text-black dark:bg-gray-900  shadow-md transition-all"
      onClick={onClick}
    >
      <Sparkles className="w-5 h-5 text-gray-400 dark:bg-gray-900" />
      {text}
    </motion.button>
  );
};

export default CustomButton;