import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      description: "Custom Shopify solution with advanced features",
    },
    {
      title: "Fitness App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?auto=format&fit=crop&q=80&w=800",
      description: "React Native app for workout tracking",
    },
    {
      title: "Real Estate Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
      description: "WordPress site with MLS integration",
    },
  ];

  return (
    <section id="portfolio" className="bg-[#EEF5FF] dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors pt-10 pb-16 duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing our best work
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-56 rounded-t-xl"
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Details Section */}
              <div className="p-6">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
