import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Palette, Code, Rocket } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const WorkProcess = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />, 
      title: "Consultation", 
      description: "We start by understanding your goals, requirements, and vision for the project"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500 dark:text-yellow-300" />, 
      title: "Planning", 
      description: "Develop a comprehensive strategy and roadmap for your project"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500 dark:text-pink-300" />, 
      title: "Design", 
      description: "Create stunning, user-friendly designs that align with your brand"
    },
    {
      icon: <Code className="w-8 h-8 text-green-500 dark:text-green-300" />, 
      title: "Development", 
      description: "Build your solution using cutting-edge technologies and best practices"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500 dark:text-blue-300" />, 
      title: "Launch & Support", 
      description: "Deploy your project and provide ongoing maintenance and support"
    }
  ];

  return (
    <section id="work-process" className="py-20 bg-[#EEF5FF] dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Work Process
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            A streamlined approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-300 dark:bg-blue-900 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Tilt key={step.title} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div 
                  // className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition-shadow "
                       className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition-shadow"
                  >
                    <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl font-bold text-blue-500 dark:text-blue-300 -mt-8 hidden md:block">
                    {index + 1}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;


