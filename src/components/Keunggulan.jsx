import React from "react";
import { motion } from "framer-motion";

const Keunggulan = () => {
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      rotateX: -15 
    },
    animate: (index) => ({
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        delay: index * 0.2,
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }),
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: -5,
      boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    initial: { 
      rotate: 0,
      scale: 0.8 
    },
    animate: {
      rotate: [0, 10, -10, 0],
      scale: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const keunggulanData = [
    {
      icon: "images/graduate-hat (1).png",
      title: "3x Seminggu",
      alt: "Graduation Hat",
      bgColor: "bg-white"
    },
    {
      icon: "images/wifi-signal (1).png",
      title: "Online/Hybrid",
      alt: "Wifi Signal",
      bgColor: "bg-white"
    },
    {
      icon: "images/save-money (3).png",
      title: "Fleksibel",
      alt: "Save Money",
      bgColor: "bg-white"
    }
  ];

  return (
    <section 
      id="keunggulan" 
      className="py-20 h-auto lg:h-[580px] relative overflow-hidden "
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        className="absolute inset-0 bg-blue-800 opacity-75"
      ></motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl font-bold mb-8 font-poppins relative z-10 text-white"
      >
        Keunggulan
      </motion.h2>
      
      <motion.div 
        initial="initial"
        animate="animate"
        className="max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 relative z-10"
      >
        {keunggulanData.map((item, index) => (
          <motion.div 
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover="hover"
            className={`${item.bgColor} shadow-custom-lg-biru border border-gray-100 text-black p-6 rounded-2xl flex flex-col items-center transform transition-all duration-300`}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4 p-4 bg-white rounded-full shadow-md"
            >
              <motion.img 
                src={item.icon} 
                className="h-16 w-16"
                alt={item.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }
              }}
              className="text-lg sm:text-xl font-bold font-roboto text-gray-800"
            >
              {item.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Keunggulan;