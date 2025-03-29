import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

const steps = [
  {
    id: 1,
    title: "Let's Get In Touch",
    description:
      "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.",
    icon: "🖱️",
  },
  {
    id: 2,
    title: "Grab Your Designs",
    description:
      "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals.",
    icon: "📑",
  },
  {
    id: 3,
    title: "Kickstart Development",
    description:
      "I expertly transform your designs into a powerful, scalable solution, fully ready to launch.",
    icon: "✨",
  },
  {
    id: 4,
    title: "And Hand Over",
    description:
      "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support.",
    icon: "🚀",
  },
];

const ProcessSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: 100, opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-4">
      <div className="text-center mb-16">
        <motion.p
          className="inline-block px-4 py-1 bg-blue-200 dark:bg-blue-800 text-blue-700  rounded-full text-sm  dark:text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⦿ How it works
        </motion.p>
        <motion.h2
          className="text-5xl font-bold mt-4 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Process <span className=" text-blue-500 dark:text-blue-400">Is Everything</span>
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Simple, streamlined process is what gets you results.
        </motion.p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <Tilt key={step.id} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
            <motion.div
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl shadow-md dark:shadow-lg h-80 flex flex-col items-center text-center justify-between relative"
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step Number in Top Right */}
              <div className="absolute top-4 right-4 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300 w-10 h-10 flex items-center justify-center rounded-full text-md font-semibold">
                {step.id}
              </div>

              {/* Icon */}
              <div className="text-5xl">{step.icon}</div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{step.description}</p>
              </div>

              {/* Separator */}
              <div className="w-full h-0.5 mb-2 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300 mt-4"></div>

              {/* Step Button */}
              <button className="px-5 py-3 bg-blue-500 dark:bg-blue-700 text-white rounded-full text-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
                Step {step.id}
              </button>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
