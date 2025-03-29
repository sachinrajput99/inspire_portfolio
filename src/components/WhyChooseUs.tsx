import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Award, Zap, Users, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-indigo-400" />,
      title: "Experience & Expertise",
      description: "Over a decade of experience delivering cutting-edge digital solutions",
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-400" />,
      title: "Fast & Scalable Solutions",
      description: "High-performance applications built with scalability in mind",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "User-Centric Design",
      description: "Beautiful, intuitive interfaces that users love to interact with",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      title: "SEO-Optimized",
      description: "Websites built with best practices for maximum visibility",
    }
  ];

  return (
    <motion.section
      id="why-choose-us"
      className="bg-white dark:bg-black py-16 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We deliver excellence in every project we undertake
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glarePosition="top"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-indigo-400 mb-4"
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;