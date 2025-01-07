import React, { useState, useEffect, useRef } from "react";
import backgroundImage from '../assets/images/gm4.png';// Import the background image

const Section = () => {
  // State for animated text
  const [visibleText, setVisibleText] = useState("");
  
  // WhatsApp contact information
  const whatsappNumber = "+6285811894529"; 

  
  // Refs and text for animation
  const sectionRef = useRef(null);
  const fullText = "Belajar Online Jadi Mudah & Praktis, Mulai Sekarang!";

  // Text animation effect
  useEffect(() => {
    let observer;
    let currentText = "";
    let index = 0;

    const animateText = () => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setVisibleText(currentText);
        index++;
        setTimeout(animateText, 50); // 50ms delay per character
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateText();
          if (observer) observer.disconnect(); // Stop observing after triggering
        }
      });
    };

    // Create Intersection Observer
    observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // WhatsApp contact handler
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-cover bg-center bg-no-repeat text-white text-start h-[640px] w-full flex items-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 ms-5">
        <div className="max-w-xl space-y-4">
          {/* Animated Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins leading-tight">
            {visibleText}
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg font-roboto">
            Kuasai skill baru dari rumah dengan <br /> 
            mentor profesional dan materi yang <br /> 
            lengkap.
          </p>
          
          {/* Call to Action Button */}
          <button 
            onClick={handleWhatsAppClick}
            className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 "
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;