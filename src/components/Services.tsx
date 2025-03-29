import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Globe, Smartphone, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Website Development",
      description: "Custom websites built with WordPress, Shopify, and MERN Stack.",
      technologies: ["WordPress", "Shopify", "MongoDB", "Express", "React", "Node.js"],
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "App Development",
      description: "Cross-platform mobile applications built with React Native.",
      technologies: ["React Native", "iOS", "Android", "API Integration"],
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "SEO Services",
      description: "Comprehensive SEO solutions to improve your online visibility.",
      technologies: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    },
  ];

  return (
    <section id="services" className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-sm px-5 py-2 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-white rounded-full inline-block">
            ⬤ Our Expertise
          </p>
          <h2 className="text-5xl font-bold mt-5">
            What We Offer <span className="text-blue-500 dark:text-blue-400">For You</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mt-5">
            Elevate your business with our top-notch digital solutions.
          </p>
        </motion.div>

        {/* Services Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Tilt
              key={service.title}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl p-10 shadow-lg dark:shadow-gray-700 hover:shadow-xl transition-shadow border border-blue-300 dark:border-blue-700"
              >
                {/* Icon */}
                <div className="mb-8 flex items-center">{service.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-400 mt-4">{service.description}</p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
